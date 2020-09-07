module.exports = {
  plugins: [require.resolve('docusaurus-lunr-search')],
  title: 'Rythm',
  tagline: 'Docs',
  url: 'https://rythmbot.co/docs',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Rythm', // Usually your GitHub org/user name.
  projectName: 'Rythm-documentation', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'rythmlogo',
        src: 'img/logo.svg',
      },
      links: [],
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
          routeBasePath: '',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Repulser/Rythm-documentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
};
