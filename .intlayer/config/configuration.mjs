const internationalization = {
  "locales": [
    "en",
    "pt-BR"
  ],
  "requiredLocales": [
    "en",
    "pt-BR"
  ],
  "strictMode": "inclusive",
  "defaultLocale": "en"
};
const routing = {
  "mode": "prefix-no-default",
  "storage": {
    "cookies": [
      {
        "name": "INTLAYER_LOCALE",
        "attributes": {
          "path": "/"
        }
      }
    ],
    "headers": [
      {
        "name": "x-intlayer-locale"
      }
    ]
  },
  "basePath": ""
};
const editor = {
  "editorURL": "http://localhost:8000",
  "cmsURL": "https://app.intlayer.org",
  "backendURL": "https://back.intlayer.org",
  "port": 8000,
  "enabled": false,
  "dictionaryPriorityStrategy": "local_first",
  "liveSync": false,
  "liveSyncPort": 4000,
  "liveSyncURL": "http://localhost:4000"
};
const log = {
  "mode": "default",
  "prefix": "\u001b[38;5;239m[intlayer] \u001b[0m"
};
const system = {
  "baseDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend",
  "moduleAugmentationDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\types",
  "unmergedDictionariesDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\unmerged_dictionary",
  "remoteDictionariesDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\remote_dictionary",
  "dictionariesDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\dictionary",
  "dynamicDictionariesDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\dynamic_dictionary",
  "fetchDictionariesDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\fetch_dictionary",
  "typesDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\types",
  "mainDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\main",
  "configDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\config",
  "cacheDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\cache",
  "tempDir": "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend\\.intlayer\\tmp"
};
const content = {
  "fileExtensions": [
    ".content.ts",
    ".content.js",
    ".content.cjs",
    ".content.mjs",
    ".content.json",
    ".content.json5",
    ".content.jsonc",
    ".content.tsx",
    ".content.jsx",
    ".content.md",
    ".content.mdx",
    ".content.yaml",
    ".content.yml"
  ],
  "contentDir": [
    "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend"
  ],
  "codeDir": [
    "C:\\Users\\nathan\\Documents\\GitHub\\resonaboo\\resonaboo-frontend"
  ],
  "excludedPath": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/.intlayer/**",
    "**/.next/**",
    "**/.nuxt/**",
    "**/.expo/**",
    "**/.vercel/**",
    "**/.turbo/**",
    "**/.tanstack/**",
    "**/.output/**",
    "**/.svelte-kit/**"
  ],
  "watch": true
};
const ai = {};
const dictionary = {
  "fill": true,
  "contentAutoTransformation": false,
  "location": "local",
  "importMode": "static"
};
const build = {
  "mode": "auto",
  "minify": false,
  "purge": false,
  "traversePattern": [
    "**/*.{tsx,ts,js,mjs,cjs,jsx,vue,svelte,astro}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/build/**",
    "!**/.intlayer/**",
    "!**/.next/**",
    "!**/.nuxt/**",
    "!**/.expo/**",
    "!**/.vercel/**",
    "!**/.turbo/**",
    "!**/.tanstack/**",
    "!**/.output/**",
    "!**/.svelte-kit/**",
    "!**/*.config.*",
    "!**/*.test.*",
    "!**/*.spec.*",
    "!**/*.stories.*",
    "!**/*.d.ts",
    "!**/*.d.ts.map",
    "!**/*.map"
  ],
  "outputFormat": [
    "esm",
    "cjs"
  ],
  "cache": true,
  "checkTypes": false
};
const compiler = {
  "enabled": true,
  "dictionaryKeyPrefix": "",
  "noMetadata": false,
  "saveComponents": false
};

export { internationalization, routing, editor, log, system, content, ai, dictionary, build, compiler };
