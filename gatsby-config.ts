import type { GatsbyConfig } from 'gatsby';
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

if (!contentfulConfig.spaceId || !contentfulConfig.accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.',
  );
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Nørrebro Cykleklub`,
    siteUrl: `http://norrebrock.dk`,
    description: '',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets',
      },
      __key: 'assets',
    },
    'gatsby-plugin-netlify',
    {
      resolve: '@sentry/gatsby',
      options: {
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'staging'].indexOf(process.env.NODE_ENV ?? '') !==
          -1)(),
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Montserrat`,
            file: `https://fonts.googleapis.com/css?family=Montserrat:400,700`,
          },
          {
            name: `Kaushan Script`,
            file: `https://fonts.googleapis.com/css?family=Kaushan+Script`,
          },
          {
            name: `Droid Serif`,
            file: `https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic`,
          },
          {
            name: `Roboto Slab`,
            file: `https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700`,
          },
        ],
      },
    },
  ],
};

export default config;
