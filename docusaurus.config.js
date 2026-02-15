// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agentic SDLC',
  tagline: 'A Risk Framework for Agentic AI Software Development',
  favicon: 'img/favicon.ico',

  url: 'https://agentic.riskfirst.org',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'risk-first',
  projectName: 'agentic-software-development',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/risk-first/agentic-software-development/blob/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'Agentic SDLC',
        logo: {
          alt: 'Agentic SDLC Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/risks/Verification-Illusion', label: 'Risks', position: 'left' },
          { to: '/practices/Independent-Verification', label: 'Practices', position: 'left' },
          { to: '/capabilities/Code-Generation', label: 'Capabilities', position: 'left' },
          {
            href: 'https://riskfirst.org',
            label: 'Risk-First',
            position: 'right',
          },
          {
            href: 'https://github.com/risk-first/agentic-software-development',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Framework',
            items: [
              { label: 'Risks', to: '/risks/Verification-Illusion' },
              { label: 'Practices', to: '/practices/Independent-Verification' },
              { label: 'Capabilities', to: '/capabilities/Code-Generation' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Risk-First', href: 'https://riskfirst.org' },
              { label: 'GitHub', href: 'https://github.com/risk-first/agentic-software-development' },
            ],
          },
          {
            title: 'Related Standards',
            items: [
              { label: 'NIST AI RMF', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
              { label: 'ISO/IEC 42001', href: 'https://www.iso.org/standard/81230.html' },
              { label: 'Gemara Schema', href: 'https://registry.cue.works/docs/github.com/gemaraproj/gemara' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Risk-First. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    './src/plugins/gemara-metadata',
    './src/plugins/category-listing',
  ],
};

export default config;
