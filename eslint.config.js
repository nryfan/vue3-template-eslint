/*
 * @Author: nry
 * @Date: 2025-05-22 18:32:25
 * @LastEditTime: 2025-06-17 17:54:15
 * @FilePath: \vue3-js-template\eslint.config.js
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
  },
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: { globals: globals.browser },
  },
  pluginVue.configs['flat/essential'],
  {
    rules: {
      //indent: ['error', 2], // 缩进使用 2 个空格
      'linebreak-style': ['error', 'unix'], // 使用 Unix 风格的换行符
      'quotes': ['error', 'single'], // 使用单引号
      'semi': ['error', 'never'], // 语句末尾不加分号
      'no-console': 'off', // 生产环境中警告 console 使用，开发环境中关闭规则
      'no-debugger': 'off', // 生产环境中警告 debugger 使用，开发环境中关闭规则
      'no-unused-vars': 'off', // 关闭未使用变量警告
      'vue/multi-word-component-names': 'off',
      'no-undef': 'off', // 关闭未定义变量警告
    },
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'public/**',
      '*.md',
      '*.json',
      '*.yml',
      '*.yaml',
      '*.lock',
      'vite.config.js',
      'eslint.config.js',
      'babel.config.js',
      'prettier.config.js',
      '.prettierrc',
      './*.js',
    ],
  },
  eslintPluginPrettierRecommended,
])
