param([switch]$SkipInstall)
$ErrorActionPreference = 'Stop'
$seriesRoot = Split-Path $PSScriptRoot -Parent
& node (Join-Path $PSScriptRoot 'check-structure.mjs')
if ($LASTEXITCODE -ne 0) { throw 'Project structure checks failed.' }
$versions = @(Get-ChildItem -LiteralPath $seriesRoot -Directory | Where-Object Name -Match '^V\d{2}-')
if ($versions.Count -ne 10) { throw 'Expected exactly ten versions.' }
foreach ($version in $versions) {
    Write-Host "Checking $($version.Name)"
    Push-Location (Join-Path $version.FullName 'backend')
    try {
        & .\mvnw.cmd clean verify
        if ($LASTEXITCODE -ne 0) { throw "Backend failed: $($version.Name)" }
    } finally { Pop-Location }
    $frontend = Join-Path $version.FullName 'frontend'
    if (Test-Path -LiteralPath $frontend) {
        Push-Location $frontend
        try {
            if (-not $SkipInstall) {
                & npm.cmd ci
                if ($LASTEXITCODE -ne 0) { throw 'npm ci failed' }
            }
            & npm.cmd test
            if ($LASTEXITCODE -ne 0) { throw 'Frontend tests failed' }
            & npm.cmd run build
            if ($LASTEXITCODE -ne 0) { throw 'Frontend build failed' }
        } finally { Pop-Location }
    }
}
Write-Host 'All ten versions verified. See docs/verification.md for the recorded delivery run.'
