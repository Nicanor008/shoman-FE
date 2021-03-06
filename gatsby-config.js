module.exports = {
  siteMetadata: {
    title: `Shoman`,
    description: `Kick start your career with the right mentorship opportunity. Focused on software development, right from beginner level to advanced, with one on one and group sessions interactions`,
    author: `Nicanor Korir`,
    siteUrl: `https://shoman.co.ke`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156931240-1",
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        sitemapSize: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `showman--mentorship`,
        short_name: `shoman`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Logo.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
