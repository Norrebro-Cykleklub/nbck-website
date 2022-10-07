import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout/Layout';

export default function NotFoundPage() {
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <Layout>
      <h1>Siden blev ikke fundet</h1>
    </Layout>
  );
}
