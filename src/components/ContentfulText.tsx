import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import useContentfulTexts from '../hooks/use-contentful-text';
import { useLayoutContext } from './Layout/Context';

export default function ContentfulText({ id }: { id: number }) {
  const { debug } = useLayoutContext();
  const getText = useContentfulTexts();
  const text = getText(id);

  if (!debug) return <span>{text}</span>;

  return (
    <Tooltip title={id} arrow>
      <span>{text}</span>
    </Tooltip>
  );
}
