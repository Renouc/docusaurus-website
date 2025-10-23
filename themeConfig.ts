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
    { to: "/blog", label: "Blog", position: "left" },
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
          label: "Blog",
          to: "/blog",
        },
        {
          label: "GitHub",
          href: "https://github.com/facebook/docusaurus",
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
};

export default {
  // 替换为你的项目的社交卡片
  image: "img/docusaurus-social-card.jpg",
  navbar,
  footer,
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies Preset.ThemeConfig;
