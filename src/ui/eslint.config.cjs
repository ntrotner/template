const { defineConfig, globalIgnores } = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
const svelteParser = require("svelte-eslint-parser");
const js = require("@eslint/js");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    files: [
      "**/*.svelte",
      "*.svelte",
      // Need to specify the file extension for Svelte 5 with rune symbols
      "**/*.svelte.js",
      "*.svelte.js",
      "**/*.svelte.ts",
      "*.svelte.ts",
    ],
    languageOptions: {
      parser: svelteParser,
    },
  },
  globalIgnores([
    "**/.DS_Store",
    "**/node_modules",
    "build",
    ".svelte-kit",
    "package",
    "**/.env",
    "**/.env.*",
    "!**/.env.example",
    "**/pnpm-lock.yaml",
    "**/package-lock.json",
    "**/yarn.lock",
  ]),
]);
