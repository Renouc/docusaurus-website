---
sidebar_position: 5
---

# 部署你的网站

Docusaurus 是一个**静态网站生成器**（也称为 **[Jamstack](https://jamstack.org/)**）。

它将你的网站构建为简单的 **HTML、JavaScript 和 CSS 文件**。

## 构建你的网站

为生产环境**构建你的网站**：

```bash
npm run build
```

静态文件在 `build` 文件夹中生成。

## 部署你的网站

在本地测试你的生产构建：

```bash
npm run serve
```

`build` 文件夹现在在 [http://localhost:3000/](http://localhost:3000/) 上提供服务。

你现在可以**几乎随处**轻松部署 `build` 文件夹，**完全免费**或成本很低（请阅读 **[部署指南](https://docusaurus.io/docs/deployment)**）。
