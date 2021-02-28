module.exports = {
  plugins: [require.resolve('docusaurus-lunr-search')],
  title: 'Rythm',
  tagline: 'Docs',
  url: 'https://rythm.fm',
  baseUrl: '/docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'Rythm', // Usually your GitHub org/user name.
  projectName: 'Rythm-documentation', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    sidebarCollapsible: true,
    hideableSidebar: true,
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'rythm-logo',
        src: 'img/logo.svg',
      },
      items: [],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Rythm. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Rythm-bot/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
};
