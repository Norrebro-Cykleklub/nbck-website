import { graphql, useStaticQuery } from 'gatsby';
import { useCallback, useMemo } from 'react';

const contentfulDocumentsId = [
  'tos',
  'privacyPolicy',
  'bylaws',
  'regulations',
  'club-life-training',
  'club-life-races',
  'club-life-travel',
] as const;
export type ContentfulDocumentId = typeof contentfulDocumentsId[number];

export default function useContentfulDocuments() {
  const data = useStaticQuery(graphql`
    query ContentfulDocumentsQuery {
      allContentfulDocument {
        edges {
          node {
            id
            identifier
            title
            headline
            text {
              raw
            }
          }
        }
      }
    }
  `) as { allContentfulDocument: AllContentfulDocuments };

  const contentfulDocuments = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () =>
      data.allContentfulDocument.edges
        .map(({ node }) => {
          const textRaw = node.text?.raw;
          return { ...node, json: textRaw ? JSON.parse(textRaw) : null };
        })
        .filter(Boolean),
    [data.allContentfulDocument.edges],
  );

  const getDocument = useCallback(
    (identifier: ContentfulDocumentId) => {
      const documents = contentfulDocumentsId.reduce(
        (acc, name) => ({
          ...acc,
          [name]: contentfulDocuments.find(doc => doc.identifier === name),
        }),
        {} as Record<ContentfulDocumentId, Optional<ContentfulDocument>>,
      );

      return documents[identifier as ContentfulDocumentId];
    },
    [contentfulDocuments],
  );

  return getDocument;
}
