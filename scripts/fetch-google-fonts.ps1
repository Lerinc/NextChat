# Fetch Google Fonts and store locally for offline use
# Usage: powershell -NoProfile -ExecutionPolicy Bypass -File ./scripts/fetch-google-fonts.ps1

$ErrorActionPreference = 'Stop'
$family = 'Noto+Sans:wght@300;400;700;900'
$cssUrl = "https://fonts.googleapis.com/css2?family=$family&display=swap"
$root = (Get-Location).ProviderPath
$outDir = Join-Path $root 'public\fonts\noto-sans'
$outCss = Join-Path $root 'public\fonts\noto-sans.css'

Write-Output "Fetching font CSS from: $cssUrl"

# Download CSS
$headers = @{ 'User-Agent' = 'powershell-fetch-google-fonts-script' }
try {
    $resp = Invoke-WebRequest -Uri $cssUrl -Headers $headers -UseBasicParsing
    $cssText = $resp.Content
} catch {
    Write-Error "Failed to download CSS: $($_.Exception.Message)"
    exit 1
}

# Regex for fonts.gstatic.com URLs — avoid quoting issues by not including quote characters in class
$regex = [regex] 'https://fonts\.gstatic\.com/[^)\s]+'
$matches = $regex.Matches($cssText) | ForEach-Object { $_.Value }
if (-not $matches -or $matches.Count -eq 0) {
    Write-Error "No fonts.gstatic.com URLs found in CSS. Aborting."
    exit 1
}

# Ensure output directory exists
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

# Prepare local CSS by replacing remote URLs with local paths
$uniqueMatches = $matches | Sort-Object -Unique
$localCss = $cssText
foreach ($url in $uniqueMatches) {
    try {
        $uri = [uri]$url
        $fname = [System.IO.Path]::GetFileName($uri.AbsolutePath)
    } catch {
        $fname = ($url -split '/')[-1]
    }
    $localPath = "/fonts/noto-sans/$fname"
    $escaped = [regex]::Escape($url)
    $localCss = [regex]::Replace($localCss, $escaped, $localPath)
}

# Write local CSS file
try {
    Set-Content -Path $outCss -Value $localCss -Encoding UTF8
    Write-Output "Wrote local CSS to $outCss"
} catch {
    Write-Error "Failed to write CSS file: $($_.Exception.Message)"
}

# Download font files
foreach ($url in $uniqueMatches) {
    try {
        $uri = [uri]$url
        $fname = [System.IO.Path]::GetFileName($uri.AbsolutePath)
        $dest = Join-Path $outDir $fname
        Write-Output "Downloading $url -> $dest"
        Invoke-WebRequest -Uri $url -Headers $headers -OutFile $dest -UseBasicParsing
    } catch {
        Write-Warning "Failed to download font $($url): $($_.Exception.Message)"
    }
}

Write-Output "Done. Bitte Dev-Server neu starten (z. B. 'yarn dev' oder 'yarn build')."