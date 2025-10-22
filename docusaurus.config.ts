import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import themeConfig from "./themeConfig";

// 这在 Node.js 中运行 - 不要在这里使用客户端代码（浏览器 API、JSX...）

const config: Config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/logo.svg",

  // 未来的标志，参见 https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // 改进与即将推出的 Docusaurus v4 的兼容性
  },

  // 在这里设置你的站点的生产 URL
  url: "https://your-docusaurus-site.example.com",
  // 设置你的站点所在的 /<baseUrl>/ 路径名
  // 对于 GitHub pages 部署，通常是 '/<projectName>/'
  baseUrl: "/",

  // GitHub pages 部署配置。
  // 如果你不使用 GitHub pages，你不需要这些。
  organizationName: "facebook", // 通常是你的 GitHub 组织/用户名。
  projectName: "docusaurus", // 通常是你的仓库名。

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // 即使你不使用国际化，你也可以使用这个字段来设置
  // 有用的元数据，如 html lang。例如，如果你的站点是中文的，你
  // 可能想用"zh-Hans"替换"en"。
  i18n: {
    defaultLocale: "en-US",
    locales: ["en-US", "zh-CN"],
    localeConfigs: {
      "en-US": {
        label: "English",
      },
      "zh-CN": {
        label: "简体中文",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // 请将此改为你的仓库。
          // 移除此项以删除"编辑此页面"链接。
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // 请将此改为你的仓库。
          // 移除此项以删除"编辑此页面"链接。
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // 用于强制执行博客最佳实践的有用选项
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig,
};

export default config;
