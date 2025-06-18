/*
 * @Author: nry
 * @Date: 2025-06-17 12:09:30
 * @LastEditTime: 2025-06-17 18:21:13
 * @FilePath: \vue3-js-template\vite.config.js
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // eslintPlugin({
    //   include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'], // 指定需要检查的文件
    //   exclude: ['node_modules/**', 'dist/**'], // 指定不需要检查的文件
    //   fix: true, // 是否自动修复
    //   cache: false, // 是否启用缓存
    // }),
  ],
})
