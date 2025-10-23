---
sidebar_position: 3
---

# 创建博客文章

Docusaurus 为每篇博客文章创建**一个页面**，同时也创建**博客索引页面**、**标签系统**、**RSS** 源等。

## 创建你的第一篇文章

在 `blog/2021-02-28-greetings.md` 创建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: 问候！
authors:
  - name: Joel Marcey
    title: Docusaurus 1 的共同创建者
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus 维护者
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

恭喜，你已经发布了你的第一篇文章！

随意操作并尽可能多地编辑这篇文章。
```

现在可以在 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings) 访问新博客文章。
