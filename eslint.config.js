import js from "@eslint/js"
import pluginQuery from "@tanstack/eslint-plugin-query"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import neostandard from "neostandard"

export default [
  ...neostandard(),
  { ignores: ["dist"] },

  // Configuración unificada para React + TypeScript
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@tanstack/query": pluginQuery,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "tsx-quotes": ["error", "prefer-double"],
      quotes: ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      "@tanstack/query/exhaustive-deps": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          // Configuración opcional: especifica el archivo tsconfig si no está en la raíz del proyecto
          project: "./tsconfig.json",
        },
      },
    },
  },
]
