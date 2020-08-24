module.exports = {
  plugins: [require.resolve('docusaurus-lunr-search')],
  title: 'Rythm',
  tagline: 'Rythm documentation',
  url: 'https://docs.rythmbot.co/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Rythm', // Usually your GitHub org/user name.
  projectName: 'Rythm-documentation', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'Rythm Documentation',
      logo: {
        alt: 'rythmlogo',
        src: 'img/logo.svg',
      },
      links: [
        {
          href: 'https://github.com/Repulser/Rythm-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
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
