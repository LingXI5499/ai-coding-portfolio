Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$apk = Join-Path $repoRoot 'android\app\build\outputs\apk\debug\app-debug.apk'

# Locate adb from PATH or the usual SDK environment variables; never hard-code a
# machine-specific SDK path.
$adb = $null
$fromPath = Get-Command adb -ErrorAction SilentlyContinue
if ($fromPath) { $adb = $fromPath.Source }
foreach ($sdk in @($env:ANDROID_SDK_ROOT, $env:ANDROID_HOME)) {
  if ($adb) { break }
  if ($sdk) {
    $candidate = Join-Path $sdk 'platform-tools\adb.exe'
    if (Test-Path -LiteralPath $candidate) { $adb = $candidate }
  }
}
if (-not $adb) {
  throw 'adb was not found. Add platform-tools to PATH or set ANDROID_SDK_ROOT / ANDROID_HOME.'
}
if (-not (Test-Path -LiteralPath $apk)) {
  throw "APK was not found. Run npm run android:debug first: $apk"
}

& $adb start-server | Out-Null
$deviceState = (& $adb get-state 2>$null).Trim()
if ($deviceState -ne 'device') {
  throw 'No authorized Android device was found. Enable USB debugging and accept the device authorization prompt.'
}

& $adb install -r $apk
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host 'Installed: com.musiclingxi.player'
