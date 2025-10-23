import { themes as prismThemes } from "prism-react-renderer";
import type * as Preset from "@docusaurus/preset-classic";

const navbar: Preset.ThemeConfig["navbar"] = {
  title: "",
  logo: {
    alt: "My Site Logo",
    src: "img/logo.svg",
  },
  items: [
    {
      type: "docSidebar",
      sidebarId: "tutorialSidebar",
      position: "left",
      label: "Tutorial",
    },
    {
      type: "docSidebar",
      sidebarId: "appsSidebar",
      position: "left",
      label: "Apps",
    },
    {
      type: "docSidebar",
      sidebarId: "themesSidebar",
      position: "left",
      label: "Themes",
    },
    {
      type: "docSidebar",
      sidebarId: "apiSidebar",
      position: "left",
      label: "API",
    },
    {
      type: "docsVersionDropdown",
      position: "right",
    },
    {
      type: "localeDropdown",
      position: "right",
    },
    {
      href: "https://github.com/facebook/docusaurus",
      label: "GitHub",
      position: "right",
    },
    // Algolia search
    {
      type: "search",
      position: "right",
    },
  ],
};

const footer: Preset.ThemeConfig["footer"] = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [
        {
          label: "Tutorial",
          to: "/docs/intro",
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          label: "Stack Overflow",
          href: "https://stackoverflow.com/questions/tagged/docusaurus",
        },
        {
          label: "Discord",
          href: "https://discordapp.com/invite/docusaurus",
        },
        {
          label: "X",
          href: "https://x.com/docusaurus",
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          label: "GitHub",
          href: "https://github.com/facebook/docusaurus",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
};

const prism: Preset.ThemeConfig["prism"] = {
  theme: prismThemes.github,
  darkTheme: prismThemes.dracula,
};

const metadata: Preset.ThemeConfig["metadata"] = [
  // <meta name="algolia-site-verification"  content="25EA0A5AEA1FA55D" />
  {
    name: "algolia-site-verification",
    content: "25EA0A5AEA1FA55D",
  },
];

const algolia: Preset.ThemeConfig["algolia"] = {
  // Algolia 提供的应用 ID
  appId: "578P4PP98L",

  //  公开 API 密钥：提交它没有危险
  apiKey: "d25cdc6c14981f6f623582b6f3d25fc6",

  indexName: "doc website",

  // 可选：见下文
  contextualSearch: true,
};

export default {
  // 替换为你的项目的社交卡片
  image: "img/docusaurus-social-card.jpg",
  navbar,
  footer,
  algolia,
  prism,
  metadata,
} satisfies Preset.ThemeConfig;
