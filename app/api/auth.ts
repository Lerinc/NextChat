import { NextRequest } from "next/server";
import { getServerSideConfig } from "../config/server";
import md5 from "spark-md5";
import { ACCESS_CODE_PREFIX, ModelProvider } from "../constant";

function getIP(req: NextRequest) {
  let ip = req.ip ?? req.headers.get("x-real-ip");
  const forwardedFor = req.headers.get("x-forwarded-for");

  if (!ip && forwardedFor) {
    ip = forwardedFor.split(",").at(0) ?? "";
  }

  return ip;
}

function anonymizeIP(ip?: string | null) {
  if (!ip) return undefined;
  const value = ip.trim();
  if (!value) return undefined;
  return anonymizeIPv4(value) ?? anonymizeIPv6(value);
}

function anonymizeIPv4(ip: string) {
  const parts = ip.split(".");
  if (parts.length !== 4 || parts.some(p => !/^\d+$/.test(p))) return undefined;
  const nums = parts.map(Number);
  if (nums.some(n => n < 0 || n > 255)) return undefined;
  return `${nums[0]}.${nums[1]}.XX.XX`;
}

function anonymizeIPv6(ip: string) {
  if (!/^[0-9a-fA-F:.]+$/.test(ip)) return undefined;
  if (ip.includes("::") && ip.indexOf("::") !== ip.lastIndexOf("::")) return undefined;

  const [headRaw, tailRaw] = ip.split("::");
  const head = headRaw ? headRaw.split(":") : [];
  const tail = tailRaw !== undefined ? tailRaw.split(":") : [];

  // embedded IPv4 at the end (e.g. ::ffff:192.0.2.1)
  const last = tail.at(-1);
  if (last && last.includes(".")) {
    const ipv4 = parseIPv4(last);
    if (!ipv4) return undefined;
    tail.pop();
    tail.push(
      ((ipv4[0] << 8) | ipv4[1]).toString(16),
      ((ipv4[2] << 8) | ipv4[3]).toString(16)
    );
  }

  if (!validIPv6Chunks(head) || !validIPv6Chunks(tail)) return undefined;

  const missing = 8 - (head.length + tail.length);
  if (missing < 0 || (!ip.includes("::") && missing !== 0)) return undefined;

  const full = [...head, ...Array(missing).fill("0"), ...tail];
  if (full.length !== 8) return undefined;

  return `${full.slice(0, 4).join(":")}:XXXX:XXXX:XXXX:XXXX`;
}

function parseIPv4(ip: string): number[] | undefined {
  const parts = ip.split(".");
  if (parts.length !== 4 || parts.some(p => !/^\d+$/.test(p))) return undefined;
  const nums = parts.map(Number);
  return nums.some(n => n < 0 || n > 255) ? undefined : nums;
}

function validIPv6Chunks(parts: string[]) {
  return parts.every(p => p === "" || /^[0-9a-fA-F]{1,4}$/.test(p));
}

function parseApiKey(bearToken: string) {
  const token = bearToken.trim().replaceAll("Bearer ", "").trim();
  const isApiKey = !token.startsWith(ACCESS_CODE_PREFIX);

  return {
    accessCode: isApiKey ? "" : token.slice(ACCESS_CODE_PREFIX.length),
    apiKey: isApiKey ? token : "",
  };
}

export function auth(req: NextRequest, modelProvider: ModelProvider) {
  const authToken = req.headers.get("Authorization") ?? "";

  // check if it is openai api key or user token
  const { accessCode, apiKey } = parseApiKey(authToken);

  const hashedCode = md5.hash(accessCode ?? "").trim();

  const serverConfig = getServerSideConfig();

  const ip = anonymizeIP(getIP(req));
  const authType: "user-api-key" | "access-code" | "none" =
    apiKey ? "user-api-key" : accessCode ? "access-code" : "none";

  const respond = (result: { error: boolean; msg?: string }) => {
    const success = !result.error;
    const errorReason = result.error ? result.msg : undefined;

    console.log("[Time]", new Date().toLocaleString());
    console.log("[Auth] type: ", authType);
    console.log("[Auth] success: ", success);
    console.log("[Auth] errorReason: ", errorReason ?? "none");
    console.log("[User IP]", ip);
    return result;
  };

  if (serverConfig.needCode && !serverConfig.codes.has(hashedCode) && !apiKey) {
    return respond({
      error: true,
      msg: !accessCode ? "empty access code" : "wrong access code",
    });
  }

  if (serverConfig.hideUserApiKey && !!apiKey) {
    return respond({
      error: true,
      msg: "you are not allowed to access with your own api key",
    });
  }

  // if user does not provide an api key, inject system api key
  if (!apiKey) {
    const serverConfig = getServerSideConfig();

    // const systemApiKey =
    //   modelProvider === ModelProvider.GeminiPro
    //     ? serverConfig.googleApiKey
    //     : serverConfig.isAzure
    //     ? serverConfig.azureApiKey
    //     : serverConfig.apiKey;

    let systemApiKey: string | undefined;

    switch (modelProvider) {
      case ModelProvider.Stability:
        systemApiKey = serverConfig.stabilityApiKey;
        break;
      case ModelProvider.GeminiPro:
        systemApiKey = serverConfig.googleApiKey;
        break;
      case ModelProvider.Claude:
        systemApiKey = serverConfig.anthropicApiKey;
        break;
      case ModelProvider.Doubao:
        systemApiKey = serverConfig.bytedanceApiKey;
        break;
      case ModelProvider.Ernie:
        systemApiKey = serverConfig.baiduApiKey;
        break;
      case ModelProvider.Qwen:
        systemApiKey = serverConfig.alibabaApiKey;
        break;
      case ModelProvider.Moonshot:
        systemApiKey = serverConfig.moonshotApiKey;
        break;
      case ModelProvider.Iflytek:
        systemApiKey =
          serverConfig.iflytekApiKey + ":" + serverConfig.iflytekApiSecret;
        break;
      case ModelProvider.DeepSeek:
        systemApiKey = serverConfig.deepseekApiKey;
        break;
      case ModelProvider.XAI:
        systemApiKey = serverConfig.xaiApiKey;
        break;
      case ModelProvider.ChatGLM:
        systemApiKey = serverConfig.chatglmApiKey;
        break;
      case ModelProvider.SiliconFlow:
        systemApiKey = serverConfig.siliconFlowApiKey;
        break;
      case ModelProvider.GPT:
      default:
        if (req.nextUrl.pathname.includes("azure/deployments")) {
          systemApiKey = serverConfig.azureApiKey;
        } else {
          systemApiKey = serverConfig.apiKey;
        }
    }

    if (systemApiKey) {
      console.log("[Auth] use system api key");
      req.headers.set("Authorization", `Bearer ${systemApiKey}`);
    } else {
      console.log("[Auth] admin did not provide an api key");
      return respond({
        error: true,
        msg: "admin did not provide an api key",
      });
    }
  } else {
    console.log("[Auth] use user api key");
  }

  return respond({
    error: false,
  });
}
