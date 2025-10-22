---
sidebar_position: 2
---

# 翻译你的网站

让我们将 `docs/intro.md` 翻译为法文。

## 配置 i18n

修改 `docusaurus.config.js` 以添加对 `fr` 语言的支持：

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/fr` 文件夹：

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

用法文翻译 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md`。

## 启动你的本地化网站

启动法文语言版本的网站：

```bash
npm run start -- --locale fr
```

你的本地化网站可以在 [http://localhost:3000/fr/](http://localhost:3000/fr/) 访问，`开始使用` 页面已被翻译。

:::caution

在开发中，你一次只能使用一个语言。

:::

## 添加语言下拉菜单

为了在语言之间无缝导航，添加一个语言下拉菜单。

修改 `docusaurus.config.js` 文件：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

语言下拉菜单现在出现在你的导航栏中：

![语言下拉菜单](./img/localeDropdown.png)

## 构建你的本地化网站

为特定语言构建你的网站：

```bash
npm run build -- --locale fr
```

或构建你的网站以同时包含所有语言：

```bash
npm run build
```
