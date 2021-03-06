const path = require(`path`);

require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

const GA = {
  identifier: `G-FGXPR9N8VW`
};

module.exports = {
  siteMetadata: {
    title: `csgodoc`,
    siteUrl: `https://csgodoc.netlify.com`,
    description: `Most useful utilities for csgo`,
    twitter: ``
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "docs",
        path: `${__dirname}/docs/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false,
              noIframeBorder: true
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              backgroundColor: `#ffffff`,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.5rem`
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false,
              noIframeBorder: true
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              backgroundColor: `#ffffff`,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.5rem`
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`
        ]
      }
    },
    "gatsby-plugin-emotion",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CSGO Doc`,
        short_name: `CSGO Doc`,
        start_url: `/`,
        background_color: `#9147ff`,
        theme_color: `#9147ff`,
        display: `standalone`,
        icon: `src/assets/csgodoc-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: GA.identifier,
        anonymize: true,
        allowLinker: true
      }
    }
  ]
};
