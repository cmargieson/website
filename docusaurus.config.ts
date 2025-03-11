import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  /*
   * Required fields
   */

  // Title for your website. Will be used in metadata and as browser tab title.
  title: "Craig Margieson",

  // Set the production url of your site here
  url: "https://cmargieson.dev/",

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  /*
   * Optional fields
   */

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          // Advanced use-case: functional editUrl
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/cmargieson/website/edit/master/${versionDocsDirPath}/${docPath}`,
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          // Serve the blog at the site's root
          routeBasePath: "/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    navbar: {
      title: "Craig Margieson",
      items: [
        {
          type: "docSidebar",
          sidebarId: "cplh",
          position: "left",
          label: "CPL(H) Notes",
        },
      ],
    },
    footer: {
      links: [
        {
          items: [
            {
              label: "Mastodon",
              href: "https://mastodon.social/@nervousechidna",
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
