import * as React from 'react';
import { graphql, HeadFC, HeadProps } from 'gatsby';
import Index from '../components/pages/Index';
import '../css/css001.css';
import '../css/cssvendor.css';
import '../css/custom.css';

interface IndexPageProps {
  data: {
    allContentfulDocument: AllContentfulDocuments;
    allFile: AllFiles;
  };
  extensions: {};
}

export default function IndexPage({ data }: IndexPageProps) {
  const documents = data.allContentfulDocument.edges.map(edge => edge.node);
  const images = data.allFile.edges
    .map(edge => edge.node)
    .filter(node => node.childImageSharp);

  return <Index documents={documents as any} images={images} />;
}

export const Head: HeadFC = () => {
  return (
    <>
      <meta name="description" content="Nørrebro Cykleklub" />
      <meta name="keywords" content="Nørrebro Cykleklub" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Nørrebro Cykleklub</title>
      <script
        src="https://kit.fontawesome.com/5cd0b3780a.js"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Kaushan+Script"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
        rel="stylesheet"
        type="text/css"
      />
    </>
  );
};

export const indexQuery = graphql`
  query IndexQuery {
    allFile {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            fluid {
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
    allContentfulDocument {
      edges {
        node {
          id
          title
          headline
          text {
            raw
          }
        }
      }
    }
  }
`;
