/*
 * @Author: nry
 */
/*
 * @Author: nry
 */
import { globalIgnores } from 'eslint/config'
import {
  defineConfigWithVueTs,
  vueTsConfigs,
  configureVueProject,
} from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
//添加eslint-plugin-prettier 插件
import eslintPluginPrettier from 'eslint-plugin-prettier'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

configureVueProject({
  tsSyntaxInTemplates: true,
  scriptLangs: ['ts', 'js', 'tsx', 'jsx'],
})

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores([
    '**/dist/**',
    '**/dist-ssr/**',
    '**/coverage/**',
    '**/node_modules/**',
    '**/vendor/**',
  ]),
  {
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/vendor/**',
    ],
  },
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/no-unused-vars': 'warn',
      'vue/no-deprecated-slot-attribute': 'off',
      'vue/no-deprecated-v-on-native-modifier': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    plugins: {
      'eslint-plugin-prettier': eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
)
