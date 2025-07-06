<!--
 * @Author: nry
-->

# vue3-ts

## 快速搭建项目

1. npm init vue@latest
2. env.d.ts 文件下定义vue模块

## editorconfig 为不同IDE编译器处理同一项目维护一致风格

1. 根目录下创建 .editorconfig
2. vscode 安装插件EditorConfig for VS Code

## prettier 代码格式化

1. npm i prettier -D
2. 配置 .prettierrc(.prettierrc.json 或者其他格式) 文件
3. .prettierignore (忽略不需要格式化的) 可选

- 要让prettier 生效，保存代码后格式化代码:
  在package.json 中 script 添加 "prettier":"prettier --write ."
  再执行 npm run prettier
  以上是手动脚本执行。

4. vscode安装 prettier插件  
   打开设置 Default Formatter 选择prettier

## eslint 代码检测

1. vscode 安装 eslint 插件
2. npm i eslint eslint-plugin-vue @vue/eslint-config-prettier @vue/eslint-config-typescript -D
3. npm i eslint-plugin-prettier -D (为解决prettier eslint冲突)
   - eslint.config.ts 添加此插件
4. 根目录下创建 eslint.config.ts 配置文件

## husky(前提要有.git)

1. npx husky-init && npm i(husky install) (会创建.husky 文件 ,package.json添加preapare:husky install脚本)
2. .husky 文件夹下 pre-commit 添加 npm run lint

## commitizen(代码提交风格)

1. npm i commitizen -D
