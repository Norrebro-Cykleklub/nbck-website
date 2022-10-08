import React, { useMemo } from 'react';
import { graphql, HeadFC } from 'gatsby';
import Index from '../components/pages/Index';
import Layout from '../components/Layout/Layout';
import Pixlee from '../components/Pixlee';
import '../assets/css/vendor.css';
import '../assets/css/custom.css';

interface IndexPageProps {
  data: {
    allContentfulDocument: AllContentfulDocuments;
    allFile: AllFiles;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extensions: any;
}

export default function IndexPage({ data }: IndexPageProps) {
  const documents = useMemo(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    () => data.allContentfulDocument.edges.map(edge => edge.node) as any,
    [data.allContentfulDocument.edges],
  );

  const images = useMemo(
    () =>
      data.allFile.edges
        .map(edge => edge.node)
        .filter(node => node.childImageSharp),
    [data.allFile.edges],
  );

  const logo = images.find(img => img.name === 'logo_simple');

  return (
    <Layout logo={logo}>
      <Index documents={documents} images={images} />
      <Pixlee />
    </Layout>
  );
}

export const Head: HeadFC<IndexPageProps['data']> = ({ data }) => {
  const files = useMemo(
    () => data.allFile.edges.map(edge => edge.node),
    [data.allFile.edges],
  );

  const [modernizrJs] = ['modernizr-2.6.2.js'].map(
    name => files.find(file => file.publicURL.endsWith(name))?.publicURL,
  );

  return (
    <>
      <meta name="description" content="Nørrebro Cykleklub" />
      <meta name="keywords" content="Nørrebro Cykleklub" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <title>Nørrebro Cykleklub</title>
      <script src={modernizrJs} />
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
