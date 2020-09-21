module.exports = {
  // pathPrefix: "/cometa-pages",
  siteMetadata: {
    title: `Cometa Intellect LLP`,
    description: `Some Description.`,
    author: `@dev_sarojkumar`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cometa-intellect-llp`,
        short_name: `cometa intellect`,
        start_url: `/`,
        background_color: `#3a0088`,
        theme_color: `#3a0088`,
        display: `minimal-ui`,
        icon: `src/images/site/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
