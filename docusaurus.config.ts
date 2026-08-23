import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Giridhar Dhatric',
  tagline: 'Staff Software Engineer — Cloud-Native Platforms & Distributed Systems',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  markdown: {
    format: 'md',
  },

  url: 'https://giridhardhatric.me',
  baseUrl: '/',

  organizationName: 'dhatric',
  projectName: 'dhatric.github.io',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        sitemap: {
          lastmod: 'date',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      { property: 'og:type', content: 'website' },
      { name: 'author', content: 'Giridhar Dhatric' },
      { name: 'twitter:site', content: '@giridhar_dhatric' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Giridhar Dhatric',
      logo: {
        alt: 'Giridhar Dhatric',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/projects', label: 'Projects', position: 'left' },
        { to: '/personal-projects', label: 'Personal Projects', position: 'left' },
        { to: '/home-server', label: 'Home Server', position: 'left' },
        { to: '/books', label: 'Books', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/resume', label: 'Resume', position: 'left' },
        {
          href: 'https://www.linkedin.com/in/giridhar-dhatric/',
          label: 'LinkedIn',
          position: 'right',
        },
        {
          href: 'https://github.com/dhatric',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            { label: 'Home', to: '/' },
            { label: 'Projects', to: '/projects' },
            { label: 'Personal Projects', to: '/personal-projects' },
            { label: 'Home Server', to: '/home-server' },
            { label: 'Books', to: '/books' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/giridhar-dhatric',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dhatric',
            },
            {
              label: 'Email',
              href: 'mailto:dhatric@gmail.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Resume', to: '/resume' },
            { label: 'Blog', to: '/blog' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Giridhar Dhatric. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'bash', 'yaml', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
