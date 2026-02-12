export const OWNER = "Lerinc";
export const REPO = "NextChat";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const PLUGINS_REPO_URL = `https://github.com/ChatGPTNextWeb/NextChat-Awesome-Plugins`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const STABILITY_BASE_URL = "https://api.stability.ai";

export const OPENAI_BASE_URL = "https://api.openai.com";
export const ANTHROPIC_BASE_URL = "https://api.anthropic.com";

export const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/";

export const BAIDU_BASE_URL = "https://aip.baidubce.com";
export const BAIDU_OATUH_URL = `${BAIDU_BASE_URL}/oauth/2.0/token`;

export const BYTEDANCE_BASE_URL = "https://ark.cn-beijing.volces.com";

export const ALIBABA_BASE_URL = "https://dashscope.aliyuncs.com/api/";

export const TENCENT_BASE_URL = "https://hunyuan.tencentcloudapi.com";

export const MOONSHOT_BASE_URL = "https://api.moonshot.ai";
export const IFLYTEK_BASE_URL = "https://spark-api-open.xf-yun.com";

export const DEEPSEEK_BASE_URL = "https://api.deepseek.com";

export const XAI_BASE_URL = "https://api.x.ai";

export const CHATGLM_BASE_URL = "https://open.bigmodel.cn";

export const SILICONFLOW_BASE_URL = "https://api.siliconflow.cn";

export const AI302_BASE_URL = "https://api.302.ai";

export const CACHE_URL_PREFIX = "/api/cache";
export const UPLOAD_URL = `${CACHE_URL_PREFIX}/upload`;

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Plugins = "/plugins",
  Auth = "/auth",
  Sd = "/sd",
  SdNew = "/sd-new",
  Artifacts = "/artifacts",
  SearchChat = "/search-chat",
  McpMarket = "/mcp-market",
}

export enum ApiPath {
  Cors = "",
  Azure = "/api/azure",
  OpenAI = "/api/openai",
  Anthropic = "/api/anthropic",
  Google = "/api/google",
  Baidu = "/api/baidu",
  ByteDance = "/api/bytedance",
  Alibaba = "/api/alibaba",
  Tencent = "/api/tencent",
  Moonshot = "/api/moonshot",
  Iflytek = "/api/iflytek",
  Stability = "/api/stability",
  Artifacts = "/api/artifacts",
  XAI = "/api/xai",
  ChatGLM = "/api/chatglm",
  DeepSeek = "/api/deepseek",
  SiliconFlow = "/api/siliconflow",
  "302.AI" = "/api/302ai",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Plugin = "chat-next-web-plugin",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
  SdList = "sd-list",
  Mcp = "mcp-store",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;
export const REQUEST_TIMEOUT_MS_FOR_THINKING = REQUEST_TIMEOUT_MS * 5;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
  Google = "Google",
  Anthropic = "Anthropic",
  Baidu = "Baidu",
  ByteDance = "ByteDance",
  Alibaba = "Alibaba",
  Tencent = "Tencent",
  Moonshot = "Moonshot",
  Stability = "Stability",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
  DeepSeek = "DeepSeek",
  SiliconFlow = "SiliconFlow",
  "302.AI" = "302.AI",
}

// Google API safety settings, see https://ai.google.dev/gemini-api/docs/safety-settings
// BLOCK_NONE will not block any content, and BLOCK_ONLY_HIGH will block only high-risk content.
export enum GoogleSafetySettingsThreshold {
  BLOCK_NONE = "BLOCK_NONE",
  BLOCK_ONLY_HIGH = "BLOCK_ONLY_HIGH",
  BLOCK_MEDIUM_AND_ABOVE = "BLOCK_MEDIUM_AND_ABOVE",
  BLOCK_LOW_AND_ABOVE = "BLOCK_LOW_AND_ABOVE",
}

export enum ModelProvider {
  Stability = "Stability",
  GPT = "GPT",
  GeminiPro = "GeminiPro",
  Claude = "Claude",
  Ernie = "Ernie",
  Doubao = "Doubao",
  Qwen = "Qwen",
  Hunyuan = "Hunyuan",
  Moonshot = "Moonshot",
  Iflytek = "Iflytek",
  XAI = "XAI",
  ChatGLM = "ChatGLM",
  DeepSeek = "DeepSeek",
  SiliconFlow = "SiliconFlow",
  "302.AI" = "302.AI",
}

export const Stability = {
  GeneratePath: "v2beta/stable-image/generate",
  ExampleEndpoint: "https://api.stability.ai",
};

export const Anthropic = {
  ChatPath: "v1/messages",
  ChatPath1: "v1/complete",
  ExampleEndpoint: "https://api.anthropic.com",
  Vision: "2023-06-01",
};

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  SpeechPath: "v1/audio/speech",
  ImagePath: "v1/images/generations",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ChatPath: (deployName: string, apiVersion: string) =>
    `deployments/${deployName}/chat/completions?api-version=${apiVersion}`,
  // https://<your_resource_name>.openai.azure.com/openai/deployments/<your_deployment_name>/images/generations?api-version=<api_version>
  ImagePath: (deployName: string, apiVersion: string) =>
    `deployments/${deployName}/images/generations?api-version=${apiVersion}`,
  ExampleEndpoint: "https://{resource-url}/openai",
};

export const Google = {
  ExampleEndpoint: "https://generativelanguage.googleapis.com/",
  ChatPath: (modelName: string) =>
    `v1beta/models/${modelName}:streamGenerateContent`,
};

export const Baidu = {
  ExampleEndpoint: BAIDU_BASE_URL,
  ChatPath: (modelName: string) => {
    let endpoint = modelName;
    if (modelName === "ernie-4.0-8k") {
      endpoint = "completions_pro";
    }
    if (modelName === "ernie-4.0-8k-preview-0518") {
      endpoint = "completions_adv_pro";
    }
    if (modelName === "ernie-3.5-8k") {
      endpoint = "completions";
    }
    if (modelName === "ernie-speed-8k") {
      endpoint = "ernie_speed";
    }
    return `rpc/2.0/ai_custom/v1/wenxinworkshop/chat/${endpoint}`;
  },
};

export const ByteDance = {
  ExampleEndpoint: "https://ark.cn-beijing.volces.com/api/",
  ChatPath: "api/v3/chat/completions",
};

export const Alibaba = {
  ExampleEndpoint: ALIBABA_BASE_URL,
  ChatPath: (modelName: string) => {
    if (modelName.includes("vl") || modelName.includes("omni")) {
      return "v1/services/aigc/multimodal-generation/generation";
    }
    return `v1/services/aigc/text-generation/generation`;
  },
};

export const Tencent = {
  ExampleEndpoint: TENCENT_BASE_URL,
};

export const Moonshot = {
  ExampleEndpoint: MOONSHOT_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const Iflytek = {
  ExampleEndpoint: IFLYTEK_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const DeepSeek = {
  ExampleEndpoint: DEEPSEEK_BASE_URL,
  ChatPath: "chat/completions",
};

export const XAI = {
  ExampleEndpoint: XAI_BASE_URL,
  ChatPath: "v1/chat/completions",
};

export const ChatGLM = {
  ExampleEndpoint: CHATGLM_BASE_URL,
  ChatPath: "api/paas/v4/chat/completions",
  ImagePath: "api/paas/v4/images/generations",
  VideoPath: "api/paas/v4/videos/generations",
};

export const SiliconFlow = {
  ExampleEndpoint: SILICONFLOW_BASE_URL,
  ChatPath: "v1/chat/completions",
  ListModelPath: "v1/models?&sub_type=chat",
};

export const AI302 = {
  ExampleEndpoint: AI302_BASE_URL,
  ChatPath: "v1/chat/completions",
  EmbeddingsPath: "jina/v1/embeddings",
  ListModelPath: "v1/models?llm=1",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
// export const DEFAULT_SYSTEM_TEMPLATE = `
// You are ChatGPT, a large language model trained by {{ServiceProvider}}.
// Knowledge cutoff: {{cutoff}}
// Current model: {{model}}
// Current time: {{time}}
// Latex inline: $x^2$
// Latex block: $$e=mc^2$$
// `;
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by {{ServiceProvider}}.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: \\(x^2\\) 
Latex block: $$e=mc^2$$
`;

export const MCP_TOOLS_TEMPLATE = `
[clientId]
{{ clientId }}
[tools]
{{ tools }}
`;

export const MCP_SYSTEM_TEMPLATE = `
You are an AI assistant with access to system tools. Your role is to help users by combining natural language understanding with tool operations when needed.

1. AVAILABLE TOOLS:
{{ MCP_TOOLS }}

2. WHEN TO USE TOOLS:
   - ALWAYS USE TOOLS when they can help answer user questions
   - DO NOT just describe what you could do - TAKE ACTION immediately
   - If you're not sure whether to use a tool, USE IT
   - Common triggers for tool use:
     * Questions about files or directories
     * Requests to check, list, or manipulate system resources
     * Any query that can be answered with available tools

3. HOW TO USE TOOLS:
   A. Tool Call Format:
      - Use markdown code blocks with format: \`\`\`json:mcp:{clientId}\`\`\`
      - Always include:
        * method: "tools/call"（Only this method is supported）
        * params: 
          - name: must match an available primitive name
          - arguments: required parameters for the primitive

   B. Response Format:
      - Tool responses will come as user messages
      - Format: \`\`\`json:mcp-response:{clientId}\`\`\`
      - Wait for response before making another tool call

   C. Important Rules:
      - Only use tools/call method
      - Only ONE tool call per message
      - ALWAYS TAKE ACTION instead of just describing what you could do
      - Include the correct clientId in code block language tag
      - Verify arguments match the primitive's requirements

4. INTERACTION FLOW:
   A. When user makes a request:
      - IMMEDIATELY use appropriate tool if available
      - DO NOT ask if user wants you to use the tool
      - DO NOT just describe what you could do
   B. After receiving tool response:
      - Explain results clearly
      - Take next appropriate action if needed
   C. If tools fail:
      - Explain the error
      - Try alternative approach immediately

5. EXAMPLE INTERACTION:

  good example:

   \`\`\`json:mcp:filesystem
   {
     "method": "tools/call",
     "params": {
       "name": "list_allowed_directories",
       "arguments": {}
     }
   }
   \`\`\`"


  \`\`\`json:mcp-response:filesystem
  {
  "method": "tools/call",
  "params": {
    "name": "write_file",
    "arguments": {
      "path": "/Users/river/dev/nextchat/test/joke.txt",
      "content": "为什么数学书总是感到忧伤？因为它有太多的问题。"
    }
  }
  }
\`\`\`

   follwing is the wrong! mcp json example:

   \`\`\`json:mcp:filesystem
   {
      "method": "write_file",
      "params": {
        "path": "nextchat_information.txt",
        "content": "1"
    }
   }
   \`\`\`

   This is wrong because the method is not tools/call.
   
   \`\`\`{
  "method": "search_repositories",
  "params": {
    "query": "2oeee"
  }
}
   \`\`\`

   This is wrong because the method is not tools/call.!!!!!!!!!!!

   the right format is:
   \`\`\`json:mcp:filesystem
   {
     "method": "tools/call",
     "params": {
       "name": "search_repositories",
       "arguments": {
         "query": "2oeee"
       }
     }
   }
   \`\`\`
   
   please follow the format strictly ONLY use tools/call method!!!!!!!!!!!
   
`;

export const SUMMARIZE_MODEL = "gpt-4o-mini";
export const GEMINI_SUMMARIZE_MODEL = "gemini-pro";
export const DEEPSEEK_SUMMARIZE_MODEL = "deepseek-chat";

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  "gpt-4-turbo": "2023-12",
  "gpt-4.1": "2024-06",
  "gpt-4.1-mini": "2024-06",
  "gpt-4.1-nano": "2024-06",
  "gpt-4.5-preview": "2023-10",
  "gpt-4o": "2023-10",
  "chatgpt-4o-latest": "2023-10",
  "gpt-4o-mini": "2023-10",
  "gpt-4-vision-preview": "2023-04",
  "o1-mini": "2023-10",
  "o1-preview": "2023-10",
  "o1": "2023-10",
  "o3-mini": "2023-10",
  // After improvements,
  // it's now easier to add "KnowledgeCutOffDate" instead of stupid hardcoding it, as was done previously.
  "gemini-pro": "2023-12",
  "gemini-pro-vision": "2023-12",
  "deepseek-chat": "2024-07",
  "deepseek-coder": "2024-07",
};

export const DEFAULT_TTS_ENGINE = "OpenAI-TTS";
export const DEFAULT_TTS_ENGINES = ["OpenAI-TTS", "Edge-TTS"];
export const DEFAULT_TTS_MODEL = "tts-1";
export const DEFAULT_TTS_VOICE = "alloy";
export const DEFAULT_TTS_MODELS = ["tts-1", "tts-1-hd"];
export const DEFAULT_TTS_VOICES = [
  "alloy",
  "echo",
  "fable",
  "onyx",
  "nova",
  "shimmer",
];

export const VISION_MODEL_REGEXES = [
  /vision/,
  /gpt-4o/,
  /gpt-4\.1/,
  /claude.*[34]/,
  /gemini-1\.5/,
  /gemini-exp/,
  /gemini-2\.[05]/,
  /learnlm/,
  /qwen-vl/,
  /qwen2-vl/,
  /gpt-4-turbo(?!.*preview)/,
  /^dall-e-3$/,
  /glm-4v/,
  /vl/i,
  /o3/,
  /o4-mini/,
  /grok-4/i,
  /gpt-5/,
];

export const EXCLUDE_VISION_MODEL_REGEXES = [/claude-3-5-haiku-20241022/];

// Model lists by provider with display names
// Structure: { apiName: "api-model-name", displayName: "Display Name" }

const openaiModels = [
  { apiName: "gpt-3.5-turbo", displayName: "GPT-3.5 Turbo" },
  { apiName: "gpt-3.5-turbo-16k", displayName: "GPT-3.5 Turbo 16K" },
  { apiName: "gpt-3.5-turbo-instruct", displayName: "GPT-3.5 Turbo Instruct" },
  { apiName: "gpt-4", displayName: "GPT-4" },
  { apiName: "gpt-4-32k", displayName: "GPT-4 32K" },
  { apiName: "dall-e-3", displayName: "DALL-E 3" },
  { apiName: "gpt-4-turbo", displayName: "GPT-4 Turbo" },
  { apiName: "gpt-4-turbo-preview", displayName: "GPT-4 Turbo Preview" },
  { apiName: "gpt-4-vision-preview", displayName: "GPT-4 Vision Preview" },
  { apiName: "gpt-4o", displayName: "GPT-4o" },
  { apiName: "chatgpt-4o-latest", displayName: "GPT-4o" },
  { apiName: "gpt-4o-mini", displayName: "GPT-4o mini" },
  { apiName: "o1-mini", displayName: "o1 mini" },
  { apiName: "o1-preview", displayName: "o1 Preview" },
  { apiName: "o3", displayName: "o3" },
  { apiName: "o3-mini", displayName: "o3 mini" },
  { apiName: "o4-mini", displayName: "o4 mini" },
  { apiName: "gpt-4.1", displayName: "GPT-4.1" },
  { apiName: "gpt-4.1-mini", displayName: "GPT-4.1 mini" },
  { apiName: "gpt-4.1-nano", displayName: "GPT-4.1 nano" },
  { apiName: "gpt-4.5-preview", displayName: "GPT-4.5 Preview" },
  { apiName: "gpt-5", displayName: "GPT-5 Thinking" },
  { apiName: "gpt-5-chat-latest", displayName: "GPT-5" },
  { apiName: "gpt-5-mini", displayName: "GPT-5 mini" },
  { apiName: "gpt-5-nano", displayName: "GPT-5 nano" },
  { apiName: "gpt-5-codex", displayName: "GPT-5 Codex" },
  { apiName: "gpt-5.1", displayName: "GPT-5.1 Thinking" },
  { apiName: "gpt-5.1-chat-latest", displayName: "GPT-5.1 Instant" },
  { apiName: "gpt-5.1-codex", displayName: "GPT-5.1 Codex" },
  { apiName: "gpt-5.1-codex-mini", displayName: "GPT-5.1 Codex mini" },
  { apiName: "gpt-5.1-codex-max", displayName: "GPT-5.1 Codex max" },
  { apiName: "gpt-5.2", displayName: "GPT-5.2 Thinking" },
  { apiName: "gpt-5.2-chat-latest", displayName: "GPT-5.2 Instant" },
];

const googleModels = [
  { apiName: "gemini-1.5-pro-latest", displayName: "Gemini 1.5 Pro" },
  { apiName: "gemini-1.5-pro", displayName: "Gemini 1.5 Pro" },
  { apiName: "gemini-1.5-flash-latest", displayName: "Gemini 1.5 Flash" },
  { apiName: "gemini-1.5-flash-8b-latest", displayName: "Gemini 1.5 Flash" },
  { apiName: "gemini-1.5-flash", displayName: "Gemini 1.5 Flash" },
  { apiName: "gemini-1.5-flash-8b", displayName: "Gemini 1.5 Flash" },
  { apiName: "learnlm-1.5-pro-experimental", displayName: "LearnLM 1.5 Pro Experimental" },
  { apiName: "gemini-exp-1206", displayName: "Gemini Exp 1206" },
  { apiName: "gemini-2.0-flash", displayName: "Gemini 2.0 Flash" },
  { apiName: "gemini-2.0-flash-exp", displayName: "Gemini 2.0 Flash Exp" },
  { apiName: "gemini-2.0-flash-lite-preview-02-05", displayName: "Gemini 2.0 Flash Lite Preview" },
  { apiName: "gemini-2.0-flash-thinking-exp", displayName: "Gemini 2.0 Flash Thinking Exp" },
  { apiName: "gemini-2.0-pro-exp", displayName: "Gemini 2.0 Pro Exp" },
  { apiName: "gemini-2.5-pro", displayName: "Gemini 2.5 Pro" },
  { apiName: "gemini-3-pro-preview", displayName: "Gemini 3 Pro" },
];

const anthropicModels = [
  { apiName: "claude-instant-1.2", displayName: "Claude Instant 1.2" },
  { apiName: "claude-2.0", displayName: "Claude 2.0" },
  { apiName: "claude-2.1", displayName: "Claude 2.1" },
  { apiName: "claude-3-opus-latest", displayName: "Claude 3 Opus" },
  { apiName: "claude-3-5-haiku-latest", displayName: "Claude 3.5 Haiku" },
  { apiName: "claude-3-5-sonnet-latest", displayName: "Claude 3.5 Sonnet" },
  { apiName: "claude-3-7-sonnet-latest", displayName: "Claude 3.7 Sonnet" },
  { apiName: "claude-sonnet-4-20250514", displayName: "Claude Sonnet 4" },
  { apiName: "claude-opus-4-20250514", displayName: "Claude Opus 4" },
  { apiName: "claude-opus-4-1-20250805", displayName: "Claude Opus 4.1" },
  { apiName: "claude-sonnet-4-5-20250929", displayName: "Claude Sonnet 4.5" },
  { apiName: "claude-haiku-4-5-20251001", displayName: "Claude 4.5 Haiku" },
  { apiName: "claude-opus-4-6", displayName: "Claude Opus 4.6" },
];

const baiduModels = [
  { apiName: "ernie-4.0-turbo-8k", displayName: "ERNIE 4.0 Turbo" },
  { apiName: "ernie-4.0-8k", displayName: "ERNIE 4.0 8K" },
  { apiName: "ernie-4.0-8k-preview", displayName: "ERNIE 4.0 Preview" },
  { apiName: "ernie-4.0-8k-latest", displayName: "ERNIE 4.0 Latest" },
  { apiName: "ernie-3.5-8k", displayName: "ERNIE 3.5 8K" },
  { apiName: "ernie-speed-128k", displayName: "ERNIE Speed 128K" },
  { apiName: "ernie-speed-8k", displayName: "ERNIE Speed 8K" },
  { apiName: "ernie-lite-8k", displayName: "ERNIE Lite 8K" },
  { apiName: "ernie-tiny-8k", displayName: "ERNIE Tiny 8K" },
];

const bytedanceModels = [
  { apiName: "doubao-lite-4k", displayName: "Doubao Lite 4K" },
  { apiName: "doubao-lite-32k", displayName: "Doubao Lite 32K" },
  { apiName: "doubao-lite-128k", displayName: "Doubao Lite 128K" },
  { apiName: "doubao-pro-4k", displayName: "Doubao Pro 4K" },
  { apiName: "doubao-pro-32k", displayName: "Doubao Pro 32K" },
  { apiName: "doubao-pro-128k", displayName: "Doubao Pro 128K" },
];

const alibabaModes = [
  { apiName: "qwen-turbo", displayName: "Qwen Turbo" },
  { apiName: "qwen-plus", displayName: "Qwen Plus" },
  { apiName: "qwen-max", displayName: "Qwen Max" },
  { apiName: "qwen-max-0428", displayName: "Qwen Max" },
  { apiName: "qwen-max-0403", displayName: "Qwen Max" },
  { apiName: "qwen-max-0107", displayName: "Qwen Max" },
  { apiName: "qwen-max-longcontext", displayName: "Qwen Max Long Context" },
  { apiName: "qwen-omni-turbo", displayName: "Qwen Omni Turbo" },
  { apiName: "qwen-vl-plus", displayName: "Qwen VL Plus" },
  { apiName: "qwen-vl-max", displayName: "Qwen VL Max" },
];

const tencentModels = [
  { apiName: "hunyuan-pro", displayName: "Hunyuan Pro" },
  { apiName: "hunyuan-standard", displayName: "Hunyuan Standard" },
  { apiName: "hunyuan-lite", displayName: "Hunyuan Lite" },
  { apiName: "hunyuan-role", displayName: "Hunyuan Role" },
  { apiName: "hunyuan-functioncall", displayName: "Hunyuan Function Call" },
  { apiName: "hunyuan-code", displayName: "Hunyuan Code" },
  { apiName: "hunyuan-vision", displayName: "Hunyuan Vision" },
];

const moonshotModels = [
  { apiName: "moonshot-v1-auto", displayName: "Moonshot Auto" },
  { apiName: "moonshot-v1-8k", displayName: "Moonshot 8K" },
  { apiName: "moonshot-v1-32k", displayName: "Moonshot 32K" },
  { apiName: "moonshot-v1-128k", displayName: "Moonshot 128K" },
  { apiName: "moonshot-v1-8k-vision-preview", displayName: "Moonshot 8K Vision" },
  { apiName: "moonshot-v1-32k-vision-preview", displayName: "Moonshot 32K Vision" },
  { apiName: "moonshot-v1-128k-vision-preview", displayName: "Moonshot 128K Vision" },
  { apiName: "kimi-thinking-preview", displayName: "Kimi Thinking" },
  { apiName: "kimi-k2-0711-preview", displayName: "Kimi K2" },
  { apiName: "kimi-latest", displayName: "Kimi Latest" },
];

const iflytekModels = [
  { apiName: "general", displayName: "Iflytek General" },
  { apiName: "generalv3", displayName: "Iflytek General V3" },
  { apiName: "pro-128k", displayName: "Iflytek Pro 128K" },
  { apiName: "generalv3.5", displayName: "Iflytek General V3.5" },
  { apiName: "4.0Ultra", displayName: "Iflytek 4.0 Ultra" },
];

const deepseekModels = [
  { apiName: "deepseek-chat", displayName: "DeepSeek Chat" },
  { apiName: "deepseek-coder", displayName: "DeepSeek Coder" },
  { apiName: "deepseek-reasoner", displayName: "DeepSeek Reasoner" },
];

const xAIModes = [
  { apiName: "grok-beta", displayName: "Grok Beta" },
  { apiName: "grok-2", displayName: "Grok 2" },
  { apiName: "grok-2-1212", displayName: "Grok 2" },
  { apiName: "grok-2-latest", displayName: "Grok 2" },
  { apiName: "grok-vision-beta", displayName: "Grok Vision Beta" },
  { apiName: "grok-2-vision-1212", displayName: "Grok 2 Vision" },
  { apiName: "grok-2-vision", displayName: "Grok 2 Vision" },
  { apiName: "grok-2-vision-latest", displayName: "Grok 2 Vision" },
  { apiName: "grok-3-mini-fast-beta", displayName: "Grok 3 Mini Fast Beta" },
  { apiName: "grok-3-mini-fast", displayName: "Grok 3 Mini Fast" },
  { apiName: "grok-3-mini-fast-latest", displayName: "Grok 3 Mini Fast" },
  { apiName: "grok-3-mini-beta", displayName: "Grok 3 Mini Beta" },
  { apiName: "grok-3-mini", displayName: "Grok 3 Mini" },
  { apiName: "grok-3-mini-latest", displayName: "Grok 3 Mini" },
  { apiName: "grok-3-fast-beta", displayName: "Grok 3 Fast Beta" },
  { apiName: "grok-3-fast", displayName: "Grok 3 Fast" },
  { apiName: "grok-3-fast-latest", displayName: "Grok 3 Fast" },
  { apiName: "grok-3-beta", displayName: "Grok 3 Beta" },
  { apiName: "grok-3", displayName: "Grok 3" },
  { apiName: "grok-3-latest", displayName: "Grok 3" },
  { apiName: "grok-4", displayName: "Grok 4" },
  { apiName: "grok-code-fast-1", displayName: "Grok Code Fast 1" },
  { apiName: "grok-4-latest", displayName: "Grok 4" },
  { apiName: "grok-4-fast-non-reasoning", displayName: "Grok 4 Fast" },
  { apiName: "grok-4-fast-reasoning", displayName: "Grok 4 Fast Reasoning" },
  { apiName: "grok-4-1-fast-non-reasoning", displayName: "Grok 4.1 Fast" },
  { apiName: "grok-4-1-fast-reasoning", displayName: "Grok 4.1 Fast Reasoning" },
];

const chatglmModels = [
  { apiName: "glm-4-plus", displayName: "GLM 4 Plus" },
  { apiName: "glm-4", displayName: "GLM 4" },
  { apiName: "glm-4-air", displayName: "GLM 4 Air" },
  { apiName: "glm-4-airx", displayName: "GLM 4 AirX" },
  { apiName: "glm-4-long", displayName: "GLM 4 Long" },
  { apiName: "glm-4-flashx", displayName: "GLM 4 FlashX" },
  { apiName: "glm-4-flash", displayName: "GLM 4 Flash" },
  { apiName: "glm-4v-plus", displayName: "GLM 4V Plus" },
  { apiName: "glm-4v", displayName: "GLM 4V" },
  { apiName: "glm-4v-flash", displayName: "GLM 4V Flash" }, // free
  { apiName: "cogview-3-plus", displayName: "CogView 3 Plus" },
  { apiName: "cogview-3", displayName: "CogView 3" },
  { apiName: "cogview-3-flash", displayName: "CogView 3 Flash" }, // free
];

const siliconflowModels = [
  { apiName: "qwen/qwen2.5-7B-Instruct", displayName: "Qwen 2.5 7B" },
  { apiName: "qwen/qwen2.5-72B-Instruct", displayName: "Qwen 2.5 72B" },
  { apiName: "deepseek-ai/DeepSeek-R1", displayName: "DeepSeek R1" },
  { apiName: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B", displayName: "DeepSeek R1 Llama 70B" },
  { apiName: "deepseek-ai/DeepSeek-R1-Distill-Llama-8B", displayName: "DeepSeek R1 Llama 8B" },
  { apiName: "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B", displayName: "DeepSeek R1 Qwen 1.5B" },
  { apiName: "deepseek-ai/DeepSeek-R1-Distill-Qwen-14B", displayName: "DeepSeek R1 Qwen 14B" },
  { apiName: "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B", displayName: "DeepSeek R1 Qwen 32B" },
  { apiName: "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B", displayName: "DeepSeek R1 Qwen 7B" },
  { apiName: "deepseek-ai/DeepSeek-V3", displayName: "DeepSeek V3" },
  { apiName: "meta-llama/Llama-3.3-70B-Instruct", displayName: "Llama 3.3 70B" },
  { apiName: "THUDM/glm-4-9b-chat", displayName: "GLM 4 9B" },
  { apiName: "Pro/deepseek-ai/DeepSeek-R1", displayName: "DeepSeek R1 Pro" },
  { apiName: "Pro/deepseek-ai/DeepSeek-V3", displayName: "DeepSeek V3 Pro" },
];

const ai302Models = [
  { apiName: "deepseek-chat", displayName: "DeepSeek Chat" },
  { apiName: "gpt-4o", displayName: "GPT-4o" },
  { apiName: "chatgpt-4o-latest", displayName: "GPT-4o" },
  { apiName: "llama3.3-70b", displayName: "Llama 3.3 70B" },
  { apiName: "deepseek-reasoner", displayName: "DeepSeek Reasoner" },
  { apiName: "gemini-2.0-flash", displayName: "Gemini 2.0 Flash" },
  { apiName: "claude-3-7-sonnet-20250219", displayName: "Claude 3.7 Sonnet" },
  { apiName: "claude-3-7-sonnet-latest", displayName: "Claude 3.7 Sonnet" },
  { apiName: "grok-3-beta", displayName: "Grok 3 Beta" },
  { apiName: "grok-3-mini-beta", displayName: "Grok 3 mini Beta" },
  { apiName: "gpt-4.1", displayName: "GPT-4.1" },
  { apiName: "gpt-4.1-mini", displayName: "GPT-4.1 mini" },
  { apiName: "o3", displayName: "" },
  { apiName: "o4-mini", displayName: "o4 mini" },
  { apiName: "qwen3-235b-a22b", displayName: "Qwen 3 235B" },
  { apiName: "qwen3-32b", displayName: "Qwen 3 32B" },
  { apiName: "gemini-2.5-pro-preview-05-06", displayName: "Gemini 2.5 Pro Preview" },
  { apiName: "llama-4-maverick", displayName: "Llama 4 Maverick" },
  { apiName: "gemini-2.5-flash", displayName: "Gemini 2.5 Flash" },
  { apiName: "claude-sonnet-4-20250514", displayName: "Claude Sonnet 4" },
  { apiName: "claude-opus-4-20250514", displayName: "Claude Opus 4" },
  { apiName: "gemini-2.5-pro", displayName: "Gemini 2.5 Pro" },
];

/**
 * Generate MODEL_DISPLAY_NAMES from all model arrays
 */
const generateModelDisplayNames = (): Record<string, string> => {
  const names: Record<string, string> = {};
  const allModels = [
    openaiModels,
    googleModels,
    anthropicModels,
    baiduModels,
    bytedanceModels,
    alibabaModes,
    tencentModels,
    moonshotModels,
    iflytekModels,
    deepseekModels,
    xAIModes,
    chatglmModels,
    siliconflowModels,
    ai302Models,
  ];
  
  allModels.forEach(modelArray => {
    modelArray.forEach(model => {
      const key = (model as any).apiName;
      names[key] = model.displayName;
    });
  });
  
  return names;
};

/**
 * Model Display Names Mapping - automatically generated from model arrays
 */
export const MODEL_DISPLAY_NAMES: Record<string, string> = generateModelDisplayNames();

/**
 * Get display name for a model
 * @param modelName The model name/id
 * @returns The display name, or the model name if not found
 */
export const getModelDisplayName = (modelName?: string): string => {
  if (!modelName) return "";
  const display = MODEL_DISPLAY_NAMES[modelName];
  // If a mapping exists and is a non-empty string, return it.
  // Otherwise fall back to the raw model name.
  if (typeof display === "string" && display.trim().length > 0) {
    return display;
  }
  return modelName;
};

let seq = 1000; // 内置的模型序号生成器从1000开始
export const DEFAULT_MODELS = [
  ...openaiModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++, // Global sequence sort(index)
    provider: {
      id: "openai",
      providerName: "OpenAI",
      providerType: "openai",
      sorted: 1, // 这里是固定的，确保顺序与之前内置的版本一致
    },
  })),
  ...openaiModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "azure",
      providerName: "Azure",
      providerType: "azure",
      sorted: 2,
    },
  })),
  ...googleModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "google",
      providerName: "Google",
      providerType: "google",
      sorted: 3,
    },
  })),
  ...anthropicModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "anthropic",
      providerName: "Anthropic",
      providerType: "anthropic",
      sorted: 4,
    },
  })),
  ...baiduModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "baidu",
      providerName: "Baidu",
      providerType: "baidu",
      sorted: 5,
    },
  })),
  ...bytedanceModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "bytedance",
      providerName: "ByteDance",
      providerType: "bytedance",
      sorted: 6,
    },
  })),
  ...alibabaModes.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "alibaba",
      providerName: "Alibaba",
      providerType: "alibaba",
      sorted: 7,
    },
  })),
  ...tencentModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "tencent",
      providerName: "Tencent",
      providerType: "tencent",
      sorted: 8,
    },
  })),
  ...moonshotModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "moonshot",
      providerName: "Moonshot",
      providerType: "moonshot",
      sorted: 9,
    },
  })),
  ...iflytekModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "iflytek",
      providerName: "Iflytek",
      providerType: "iflytek",
      sorted: 10,
    },
  })),
  ...xAIModes.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "xai",
      providerName: "XAI",
      providerType: "xai",
      sorted: 11,
    },
  })),
  ...chatglmModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "chatglm",
      providerName: "ChatGLM",
      providerType: "chatglm",
      sorted: 12,
    },
  })),
  ...deepseekModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "deepseek",
      providerName: "DeepSeek",
      providerType: "deepseek",
      sorted: 13,
    },
  })),
  ...siliconflowModels.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "siliconflow",
      providerName: "SiliconFlow",
      providerType: "siliconflow",
      sorted: 14,
    },
  })),
  ...ai302Models.map((model) => ({
    apiName: (model as any).apiName,
    displayName: (model as any).displayName ?? (model as any).apiName,
    available: true,
    sorted: seq++,
    provider: {
      id: "ai302",
      providerName: "302.AI",
      providerType: "ai302",
      sorted: 15,
    },
  })),
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;

// some famous webdav endpoints
export const internalAllowedWebDavEndpoints = [
  "https://dav.jianguoyun.com/dav/",
  "https://dav.dropdav.com/",
  "https://dav.box.com/dav",
  "https://nanao.teracloud.jp/dav/",
  "https://bora.teracloud.jp/dav/",
  "https://webdav.4shared.com/",
  "https://dav.idrivesync.com",
  "https://webdav.yandex.com",
  "https://app.koofr.net/dav/Koofr",
];

export const DEFAULT_GA_ID = "G-89WN60ZK2E";

export const SAAS_CHAT_URL = "https://nextchat.club";
export const SAAS_CHAT_UTM_URL = "https://nextchat.club?utm=github";
