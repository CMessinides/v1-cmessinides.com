module.exports = {
  siteMetadata: {
    title: `Cameron Messinides`,
    description: `Front-end developer, designer, and writer. Working toward a fast, accessible, ethical web.`,
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
    `gatsby-transformer-remark`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
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
        background_color: `#5922EF`,
        theme_color: `#5922EF`,
        display: `minimal-ui`,
        icon: `src/images/cm-icon.png`, // This path is relative to the root of the site.
        include_favicon: true
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require(`path`).resolve(__dirname, `node_modules`)]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
