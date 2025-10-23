---
sidebar_position: 1
---

# 管理文档版本

Docusaurus 可以管理你文档的多个版本。

## 创建文档版本

发布你的项目版本 1.0：

```bash
npm run docusaurus docs:version 1.0
```

`docs` 文件夹被复制到 `versioned_docs/version-1.0`，并创建 `versions.json`。

你的文档现在有 2 个版本：

- `1.0` 位于 `http://localhost:3000/docs/` 用于版本 1.0 的文档
- `current` 位于 `http://localhost:3000/docs/next/` 用于**即将发布的文档**

## 添加版本下拉菜单

要在版本之间无缝导航，请添加版本下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

文档版本下拉菜单出现在你的导航栏中：

![文档版本下拉菜单](./img/docsVersionDropdown.png)

## 更新现有版本

可以编辑各自文件夹中的版本化文档：

- `versioned_docs/version-1.0/hello.md` 更新 `http://localhost:3000/docs/hello`
- `docs/hello.md` 更新 `http://localhost:3000/docs/next/hello`
