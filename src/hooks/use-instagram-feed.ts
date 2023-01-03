import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';

export default function useInstagramFeed() {
  const data = useStaticQuery(graphql`
    query ContentfulInstagramFeedQuery {
      allContentfulInstagramFeed(limit: 3) {
        edges {
          node {
            childrenContentfulInstagramFeedFeedJsonNode {
              id
              caption
              media_type
              media_url
              username
              timestamp
              permalink
            }
          }
        }
      }
    }
  `) as { allContentfulInstagramFeed: AllContentfulInstagramFeed };

  const contentfulInstagramFeed = useMemo(
    () =>
      data.allContentfulInstagramFeed.edges
        .map(({ node }) => {
          return node;
        })
        .filter(Boolean),
    [data.allContentfulInstagramFeed.edges],
  );

  return contentfulInstagramFeed?.[0]
    ?.childrenContentfulInstagramFeedFeedJsonNode;
}
