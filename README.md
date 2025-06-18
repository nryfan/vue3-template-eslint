<!--
 * @Author: nry
 * @Date: 2025-06-17 12:09:30
 * @LastEditTime: 2025-06-18 14:29:11
 * @FilePath: \vue3-js-template\README.md
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->
<!--
 * @Author: nry
 * @Date: 2025-06-17 12:09:30
 * @LastEditTime: 2025-06-17 18:34:15
 * @FilePath: \vue3-js-template\README.md
 * @Description:
 *
 * Copyright (c) 2025 by ${git_name_email}, All Rights Reserved.
-->

# Vue 3 + Vite

# eslint + prettier

## eslint

1.
2. yarn add eslint@latest -D
3. 根目录创建 eslint.config.js 文件,
4. yarn add @eslint/js eslint-plugin-vue globals eslint-plugin-prettier -D
5. yarn add vue-eslint-parser vite-plugin-eslint eslint-config-prettier -D
   - 若未出现提示 就重新打开这个窗口

## 下载prettier

1. yarn add prettier -D
2. 根目录下创建prettier.config.js

## husky

1. git init
2. npx husky-init && npm install
3. yarn add -D lint-staged
4. 配置 lint-staged package.json 中添加脚本 "lint:lint-staged": "lint-staged",
5. 在.husky 文件夹下 pre-commit 中添加 yarn lint:lint-staged

## commitlint

1. yarn add @commitlint/cli @commitlint/config-conventional -D
2. 根目录下创建commitlint.config.js
3. .husky文件夹下创建commit-msg 文件,
   - npx --no -- commitlint --edit $1
4. yarn add commitizen cz-git -D
5. package.json 文件中配置
   - "config": { "commitizen": { "path": "node_modules/cz-git" } }

- script中 "commit": "git add . && git-cz"
