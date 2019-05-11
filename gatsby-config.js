module.exports = {
  siteMetadata: {
    title: `Cameron Messinides`,
    description: `Here’s how I can help the Kenyon College Office of Communications.`,
    author: `@cmessinides`,
    social: {
      github: `https://github.com/CMessinides`,
      codepen: `https://codepen.io/cmessinides`,
      instagram: `https://www.instagram.com/cmessinides`,
      email: `mailto:me@cmessinides.com`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cameron Messinides`,
        short_name: `C. Messinides`,
        start_url: `/`,
        background_color: `#4B2E84`,
        theme_color: `#4B2E84`,
        display: `minimal-ui`,
        icon: `src/images/cm-icon.png`, // This path is relative to the root of the site.
        include_favicon: true
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
    `gatsby-plugin-postcss`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
