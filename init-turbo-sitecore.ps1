param(
    [Parameter(Mandatory=$true)]
    [string]$projectDir,

    [Parameter(Mandatory=$true)]
    [string]$siteName,

    [Parameter(Mandatory=$true)]
    [string]$sitecoreEdgeContextId,

    [string]$defaultLanguage = "en"
)

#globally install pnpm
npm i -g pnpm

Set-Location $projectDir

npx create-turbo@latest . -m pnpm -e https://github.com/GlennvG/turborepo/tree/main/examples/with-sitecore

(Get-Content .\apps\web\.env) -replace '^SITECORE_SITE_NAME=.*$', "SITECORE_SITE_NAME=$siteName" | Set-Content .\apps\web\.env
(Get-Content .\apps\web\.env) -replace '^DEFAULT_LANGUAGE=.*$', "DEFAULT_LANGUAGE=$defaultLanguage" | Set-Content .\apps\web\.env
(Get-Content .\apps\web\.env) -replace '^DISABLE_SSG_FETCH=.*$', "DISABLE_SSG_FETCH=true" | Set-Content .\apps\web\.env
(Get-Content .\apps\web\.env) -replace '^SITECORE_EDGE_CONTEXT_ID=.*$', "SITECORE_EDGE_CONTEXT_ID=$sitecoreEdgeContextId" | Set-Content .\apps\web\.env

turbo dev --filter web...