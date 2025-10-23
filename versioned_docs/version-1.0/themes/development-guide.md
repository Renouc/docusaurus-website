---
sidebar_position: 2
---

# Theme Development Guide

This is a comprehensive theme development guide covering the entire process from basics to publication.

## Liquid Basics

Shoplazza themes use the Liquid template language, which allows you to dynamically generate HTML.

### Variables

```liquid
{{ product.title }}
{{ product.price | money }}
```

### Conditional Statements

```liquid
{% if product.available %}
  <p>Product is in stock</p>
{% else %}
  <p>Product is out of stock</p>
{% endif %}
```

### Loops

```liquid
{% for product in collection.products %}
  <h2>{{ product.title }}</h2>
{% endfor %}
```

## Theme Structure

A standard Shoplazza theme contains the following directory structure:

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

## Styling

Use CSS to define styles for your theme. It's recommended to use CSS variables for easy theme customization:

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

## Testing and Optimization

Conduct thorough testing before publishing:

- Test in different browsers
- Check responsive design
- Optimize loading performance
- Verify all functionality works correctly

## Publishing Your Theme

When ready to publish:

1. Complete all testing and optimization
2. Write detailed theme description
3. Create theme preview
4. Submit to Shoplazza marketplace for review
