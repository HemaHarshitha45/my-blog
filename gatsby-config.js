require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

export const siteMetadata = {
  siteTitleAlt: `Harshitha`,
  siteTitle: `Harshitha`,
}
export const plugins = [
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
          url: `https://www.github.com/HemaHarshitha45/`,
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
      name: `Harshitha's blog`,
      short_name: `Harshitha's blog`,
      description: `Everything about programming.`,
      start_url: `/`,
      background_color: `#fff`,
      display: `standalone`,
      icon: `./static/favicon-16x16.png`,
      theme_color_in_head: false,
    },
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-gatsby-cloud`,
  `gatsby-plugin-netlify`,
  shouldAnalyseBundle && {
    resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
    options: {
      analyzerMode: `static`,
      reportFilename: `_bundle.html`,
      openAnalyzer: false,
    },
  },
].filter(Boolean)
