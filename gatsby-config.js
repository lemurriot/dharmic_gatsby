module.exports = {
  siteMetadata: {
    title: `Dharmic Astrology`,
    description: `Dharmic Astrology research, readings, and collections`,
    author: `pdxwebdev.io`,
    siteUrl: `https://www.dharmicastrology.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons8-lotus-48.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        queryLimit: 10000,
        contentTypes: [`article`, `package-item`, `featured-video`, `amazon-link`],
        singleTypes: [`main-page-description`, `main-page-subtitle`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-172427996-1',
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cinzel Decorative`,
            variants: [`700`],
          },
          {
            family: `Tangerine`,
            variants: [`700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.dharmicastrology.com',
        sitemap: 'https://www.dharmicastrology.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
