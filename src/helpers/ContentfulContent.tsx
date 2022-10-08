import React from 'react';
import { BLOCKS, MARKS, Document } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styled from 'styled-components';

export default function ContentfulContent({ json }: { json: Document }) {
  return documentToReactComponents(json, {
    renderMark: {
      [MARKS.BOLD]: (children: React.ReactNode) => <strong>{children}</strong>,
      [MARKS.ITALIC]: (children: React.ReactNode) => <i>{children}</i>,
      [MARKS.UNDERLINE]: (children: React.ReactNode) => <u>{children}</u>,
      [MARKS.CODE]: (children: React.ReactNode) => <code>{children}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => (
        <ParagraphCss>{children}</ParagraphCss>
      ),
      [BLOCKS.HEADING_1]: (_: unknown, children: React.ReactNode) => (
        <h1>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (_: unknown, children: React.ReactNode) => (
        <h2>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => (
        <h3>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (_: unknown, children: React.ReactNode) => (
        <h4>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (_: unknown, children: React.ReactNode) => (
        <h5>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (_: unknown, children: React.ReactNode) => (
        <h6>{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (_: unknown, children: React.ReactNode) => (
        <ul>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_: unknown, children: React.ReactNode) => (
        <ol>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_: unknown, children: React.ReactNode) => (
        <li>{children}</li>
      ),
      [BLOCKS.QUOTE]: (_: unknown, children: React.ReactNode) => (
        <blockquote>{children}</blockquote>
      ),
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.EMBEDDED_ENTRY]: () => null,
      [BLOCKS.EMBEDDED_ASSET]: () => null,
    },
  });
}

const ParagraphCss = styled.p`
  white-space: pre-wrap;
  margin: 0 0 5px 0 !important;
`;
