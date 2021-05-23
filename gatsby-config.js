require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Harshitha`,
    siteTitle: `Harshitha`,
  },
  plugins: [
    {


      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/hemaharshitha45/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/HemaHarshitha45`,
          },
          
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
     resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Harshitha's Blog`,
        short_name: `Harshitha's Blog`,
        description: `Documenting my learnings and experiences related to Software Engineering`,
        start_url: `/`,
        background_color: `#fff`,
        display: `standalone`,
        icon: `./static/favicon-16x16.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}