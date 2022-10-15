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
  ],
};

export default config;
