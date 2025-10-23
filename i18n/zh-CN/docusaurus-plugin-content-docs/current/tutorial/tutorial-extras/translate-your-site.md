---
sidebar_position: 2
---

# 翻译你的网站

让我们将 `docs/intro.md` 翻译成法语。

## 配置 i18n

修改 `docusaurus.config.js` 以添加 `fr` 语言环境支持：

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

将 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 翻译成法语。

## 启动本地化网站

在法语语言环境上启动你的网站：

```bash
npm run start -- --locale fr
```

你的本地化网站可在 [http://localhost:3000/fr/](http://localhost:3000/fr/) 访问，`入门` 页面已被翻译。

:::caution

在开发中，你一次只能使用一种语言。

:::

## 添加语言下拉菜单

要在多种语言之间无缝导航，请添加语言下拉菜单。

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

## 构建本地化网站

为特定语言构建你的网站：

```bash
npm run build -- --locale fr
```

或一次性为所有语言构建你的网站：

```bash
npm run build
```
