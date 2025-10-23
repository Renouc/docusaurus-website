---
sidebar_position: 2
---

# 主题开发指南

这是一份详细的主题开发指南，涵盖从基础到发布的整个过程。

## Liquid 基础

Shoplazza 主题使用 Liquid 模板语言。Liquid 允许你动态生成 HTML。

### 变量

```liquid
{{ product.title }}
{{ product.price | money }}
```

### 条件语句

```liquid
{% if product.available %}
  <p>产品有货</p>
{% else %}
  <p>产品缺货</p>
{% endif %}
```

### 循环

```liquid
{% for product in collection.products %}
  <h2>{{ product.title }}</h2>
{% endfor %}
```

## 主题结构

一个标准的 Shoplazza 主题包含以下目录结构：

```
theme/
├── config/
│   └── theme.json
├── layout/
│   └── theme.liquid
├── templates/
│   ├── product.liquid
│   ├── collection.liquid
│   └── cart.liquid
├── sections/
├── snippets/
├── assets/
│   ├── css/
│   └── js/
└── locales/
```

## 样式设计

使用 CSS 为你的主题定义样式。推荐使用 CSS 变量以便主题定制：

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
}
```

## 测试和优化

在发布前进行充分测试：

- 在不同浏览器中测试
- 检查响应式设计
- 优化加载性能
- 验证所有功能是否正常工作

## 发布主题

准备好发布时：

1. 完成所有测试和优化
2. 编写详细的主题说明
3. 创建主题预览
4. 提交到 Shoplazza 主题市场进行审核
