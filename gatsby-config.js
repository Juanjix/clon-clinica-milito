require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Clinica Milito`,
    description: `Acceso para la Clinica Milito`,
    url: "https://clinica-milito.com.ar",
    image: "https://demo.arena.indicius.com/open-graph.png",
    twitterUsername: "",
    author: `juanjose@indicius.com`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: false },
  plugins: [
    // persistent-layout is enabled by default
    // to disable comment the following plugin,
    // and manually wrap your pages with your layout(s)
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve(`./src/layouts/layout-primary.js`),
    //   },
    // },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clinica Milito`,
        short_name: `Clinica Milito`,
        start_url: `/`,
        background_color: `#EBEDEE`,
        theme_color: `#EBEDEE`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public", ".wordpress-cache"],
        // Any eslint-webpack-plugin options below
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `zyrw9tutbneb`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        host: `cdn.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          breakpoints: [768, 1024, 1200, 1440, 2000],
          quality: 100,
          // the dominantColour option was leading to too many black placeholders,
          // which was really offputting
          placeholder: `blurred`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-66489826-1",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-66489826-1",
        },
        googleTagManager: {
          trackingId: "",
        },
        facebookPixel: {
          pixelId: "",
        },
        environments: ["production", "development"],
      },
    },

    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sass",
  ],
  trailingSlash: `always`,
}
