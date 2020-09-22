module.exports = {
  // pathPrefix: "/cometa-pages",
  siteMetadata: {
    title: `Cometa Intellect LLP`,
    description: `App developer coaching for class 5th to 10th`,
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
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `yellow`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-178671002-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cometa-intellect-llp`,
        short_name: `cometa intellect`,
        start_url: `/`,
        background_color: `#ffbd39`,
        display: `minimal-ui`,
        icon: `src/images/site/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
