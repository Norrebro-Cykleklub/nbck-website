import React, { useMemo } from 'react';
import { graphql, HeadFC, Script, ScriptStrategy } from 'gatsby';
import { WindowLocation } from '@reach/router';
import Index from '../components/pages/Index';
import Layout from '../components/Layout/Layout';
import Pixlee from '../components/Pixlee';
import '../assets/css/vendor.css';
import '../assets/css/custom.css';

interface IndexPageProps {
  data: {
    allFile: AllFiles;
  };
  location?: WindowLocation<WindowLocation['state']>;
}

export default function IndexPage({ data, location }: IndexPageProps) {
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
    <Layout logo={logo} location={location}>
      <Index images={images} />
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
      <Script src={modernizrJs} strategy={ScriptStrategy.postHydrate} />
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
