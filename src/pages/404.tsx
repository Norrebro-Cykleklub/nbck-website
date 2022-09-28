import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function NotFoundPage() {
  useEffect(() => {
    navigate('/');
  }, []);

  return (
    <div>
      <h1>Siden blev ikke fundet</h1>
    </div>
  );
}
