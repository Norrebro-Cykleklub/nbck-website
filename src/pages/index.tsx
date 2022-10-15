import React, { useMemo } from 'react';
import { graphql, HeadFC } from 'gatsby';
import Index from '../components/pages/Index';
import Layout from '../components/Layout/Layout';
import Pixlee from '../components/Pixlee';
import '../assets/css/vendor.css';
import '../assets/css/custom.css';

interface IndexPageProps {
  data: {
    allFile: AllFiles;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extensions: any;
}

export default function IndexPage({ data }: IndexPageProps) {
  const images = useMemo(
    () =>
      data.allFile.edges
        .map(edge => edge.node)
        .filter(node => node.childImageSharp),
    [data.allFile.edges],
  );

  const logo = useMemo(
    () => images.find(img => img.name === 'logo_simple'),
    [images],
  );

  return (
    <Layout logo={logo}>
      <Index images={images} />
      <Pixlee />
    </Layout>
  );
}

export const Head: HeadFC<IndexPageProps['data']> = ({ data }) => {
  const files = data.allFile.edges.map(edge => edge.node);
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
  }
`;
