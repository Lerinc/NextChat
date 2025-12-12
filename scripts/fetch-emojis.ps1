param(
  [string]$Version = "16.0.0",
  [string]$OutDirApp = "$PWD\app\icons\emojis",
  [string]$OutDirPublic = "$PWD\public\emojis"
)

$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

if (-not (Test-Path $OutDirApp)) { New-Item -ItemType Directory -Path $OutDirApp -Force | Out-Null }
if (-not (Test-Path $OutDirPublic)) { New-Item -ItemType Directory -Path $OutDirPublic -Force | Out-Null }

$tmp = Join-Path $env:TEMP ([System.IO.Path]::GetRandomFileName())
New-Item -ItemType Directory -Path $tmp | Out-Null

$tarball = "https://registry.npmjs.org/emoji-datasource-apple/-/emoji-datasource-apple-$Version.tgz"
Write-Host "Hole Paket: $tarball"
$tgz = Join-Path $tmp "emoji-datasource-apple.tgz"
try {
  Invoke-WebRequest -Uri $tarball -OutFile $tgz -UseBasicParsing -ErrorAction Stop
} catch {
  Write-Error "Fehler beim Herunterladen des Pakets: $($_.Exception.Message)"
  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
  exit 1
}

Write-Host "Entpacke Paket..."
try {
  # extract using tar (available on modern Windows)
  & tar -xzf $tgz -C $tmp
} catch {
  Write-Error "Fehler beim Entpacken: $($_.Exception.Message)"
  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
  exit 1
}

$sourceDir = Join-Path $tmp 'package\img\apple\64'
if (-not (Test-Path $sourceDir)) {
  Write-Error "Erwarteter Pfad nicht gefunden im Paket: $sourceDir"
  Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue
  exit 1
}

$files = Get-ChildItem -Path $sourceDir -Filter *.png -File -ErrorAction Stop
foreach ($f in $files) {
  $destApp = Join-Path $OutDirApp $f.Name
  $destPublic = Join-Path $OutDirPublic $f.Name
  if (-not (Test-Path $destApp)) { Copy-Item -Path $f.FullName -Destination $destApp -Force; Write-Host "Kopiert nach app: $($f.Name)" } else { Write-Host "App: Überspringe bereits vorhandene Datei: $($f.Name)" }
  if (-not (Test-Path $destPublic)) { Copy-Item -Path $f.FullName -Destination $destPublic -Force; Write-Host "Kopiert nach public: $($f.Name)" } else { Write-Host "Public: Überspringe bereits vorhandene Datei: $($f.Name)" }
}

Remove-Item -Recurse -Force $tmp -ErrorAction SilentlyContinue

Write-Host "Fertig. Emoji-Dateien befinden sich in:`n  app: $OutDirApp`n  public: $OutDirPublic"