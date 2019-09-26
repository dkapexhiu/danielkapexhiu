const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  /* General Information */
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  /* Plugins */
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          }
        ],
      },
    },
    {
    // Note: this plugin is coded to only work on production
    resolve: `gatsby-plugin-subscribers`,
      options: {
         id: '3b59f502-b7d3-4a3e-91e2-a63c3b5e5ff1',
      }
    },
    /* Must be placed at the end */
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
  ],
}
