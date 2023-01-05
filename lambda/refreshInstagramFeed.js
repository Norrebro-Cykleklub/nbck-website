/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const Sentry = require('@sentry/serverless');
const contentful = require('contentful');
const contentfulManagement = require('contentful-management');
const fetch = require('node-fetch');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
});

const contentfulEntryId = '10ywGXIr7ZkIuzR38dYWpn';
const contentfulSpace = process.env.CONTENTFUL_SPACE_ID;
const contentfulAccessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const contentfulManagementAccessToken =
  process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN;

const client = contentful.createClient({
  space: contentfulSpace,
  environment: 'master',
  accessToken: contentfulAccessToken,
});

const clientManagement = contentfulManagement.createClient({
  accessToken: contentfulManagementAccessToken,
});

const getInstagramRefreshToken = oldToken =>
  fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldToken}`,
  )
    .then(async res => {
      const token = ((await res.json()) || {}).access_token;

      console.log('Refreshed Instagram token', token);
      return token;
    })
    .catch(err => console.log(err));

const _contentful = {
  getInstagramToken: async () => {
    console.log('Fetching Instagram token');
    return client
      .getEntry(contentfulEntryId)
      .then(entry => {
        const { fields } = entry;
        return fields.token;
      })
      .catch(console.error);
  },
  getFeed: async () => {
    console.log('Fetching Instagram feed');
    return client
      .getEntry(contentfulEntryId)
      .then(entry => {
        const { fields } = entry;
        return fields.feed;
      })
      .catch(console.error);
  },
  setFeed: async (feed, newInstagramToken) => {
    console.log('Setting new Instagram feed');

    await clientManagement
      .getSpace(contentfulSpace)
      .then(space => space.getEnvironment('master'))
      .then(environment => environment.getEntry(contentfulEntryId))
      .then(entry =>
        entry.patch([
          {
            op: 'replace',
            path: '/fields/feed/en-US',
            value: feed,
          },
          {
            op: 'replace',
            path: '/fields/token/en-US',
            value: newInstagramToken,
          },
        ]),
      )
      .then(entry => {
        console.log(`Entry ${entry.sys.id} updated.`);
        entry.publish();
      })
      .catch(console.error);
  },
};

async function getNewFeed(instagramToken) {
  const feed = await fetch(
    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp,permalink&access_token=${instagramToken}`,
  )
    .then(async res => ((await res.json()) || {}).data)
    .catch(err => console.log(err));

  const withAlbumPosts = await Promise.all(
    (feed || []).map(async post => {
      if (post.media_type === 'CAROUSEL_ALBUM') {
        const children = await fetch(
          `https://graph.instagram.com/${post.id}/children?fields=id,media_type,media_url,username,timestamp,permalink&access_token=${instagramToken}`,
        )
          .then(async res => ((await res.json()) || {}).data)
          .catch(err => console.log(err));

        return { ...post, children: children || [] };
      }

      return post;
    }),
  );

  return withAlbumPosts;
}

// eslint-disable-next-line no-unused-vars, func-names
exports.handler = async function (event, context) {
  try {
    const newInstagramToken = await getInstagramRefreshToken(
      await _contentful.getInstagramToken(),
    );

    if (!newInstagramToken) {
      throw new Error('Failed to refresh Instagram token');
    }

    const feed = await getNewFeed(newInstagramToken);
    await _contentful.setFeed(feed, newInstagramToken);
  } catch (error) {
    console.error('Failed to fetch Instagram feed', error);
  }

  return {
    statusCode: 200,
  };
};
