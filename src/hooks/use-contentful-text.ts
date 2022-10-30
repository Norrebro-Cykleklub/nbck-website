import { graphql, useStaticQuery } from 'gatsby';
import { useCallback, useMemo } from 'react';

export default function useContentfulTexts() {
  const data = useStaticQuery(graphql`
    query ContentfulTextQuery {
      allContentfulText {
        edges {
          node {
            contentfulid
            text_ {
              text_
            }
          }
        }
      }
    }
  `) as { allContentfulText: AllContentfulText };

  const contentfulTexts = useMemo(
    () => data.allContentfulText.edges.map(edge => edge.node).filter(Boolean),
    [data.allContentfulText.edges],
  );

  const getText = useCallback(
    (id: number) => {
      return (
        contentfulTexts.find(text => text.contentfulid === id)?.text_.text_ ??
        ''
      );
    },
    [contentfulTexts],
  );

  return getText;
}
