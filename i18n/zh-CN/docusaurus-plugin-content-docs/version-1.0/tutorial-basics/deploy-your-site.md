---
sidebar_position: 5
---

# 部署你的网站

Docusaurus 是一个 **静态网站生成器**（也称为 **[Jamstack](https://jamstack.org/)**）。

它将你的网站构建为简单的 **静态 HTML、JavaScript 和 CSS 文件**。

## 构建你的网站

为生产环境 **构建你的网站**：

```bash
npm run build
```

静态文件将生成在 `build` 文件夹中。

## 部署你的网站

在本地测试你的生产构建：

```bash
npm run serve
```

`build` 文件夹现在可以在 [http://localhost:3000/](http://localhost:3000/) 中访问。

你现在可以 **几乎在任何地方** 轻松部署 `build` 文件夹，**完全免费** 或仅需极低的成本（阅读 **[部署指南](https://docusaurus.io/docs/deployment)**）。
