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
      logo: {
        alt: 'rythm-logo',
        src: 'img/logosmall.svg',
      },
      style: 'dark',
      links: [
        {
          title: "Stay Informed",
          items: [
            {
              label: "Discord",
              to: "https://rythm.fm/discord",
            },
            {
              label: "Twitter",
              to: "https://rythm.fm/twitter",
            },
          ],
        },
        {
          title: "Find us online",
          items: [
            {
              label: "Top.gg",
              to: "https://top.gg/bot/235088799074484224",
            },
            {
              label: "Bots.gg",
              to: "https://discord.bots.gg/bots/235088799074484224",
            },
            {
              label: "BoD.xyz",
              to: "https://bots.ondiscord.xyz/bots/235088799074484224"
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Dashboard",
              to: "https://rythm.fm/app",
            },
            {
              label: "Terms of Service",
              to: "https://rythm.fm/terms",
            },
            {
              label: "Privacy Policy",
              to: "https://rythm.fm/privacy",
            },
          ],
        },
      ],
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
