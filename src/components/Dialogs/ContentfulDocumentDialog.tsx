import React, { useMemo } from 'react';
import ContentfulContent from '../../helpers/ContentfulContent';
import useContentfulDocuments, {
  ContentfulDocumentId,
} from '../../hooks/use-contentful-documents';
import Dialog from './Dialog';

interface ContentfulDocumentDialogProps {
  id: ContentfulDocumentId;
  visible: boolean;
  onClose: () => void;
  textAlign?: 'left' | 'center';
}

export default function ContentfulDocumentDialog({
  id,
  visible,
  onClose,
  textAlign = 'left',
}: ContentfulDocumentDialogProps) {
  const getDocument = useContentfulDocuments();
  const document = useMemo(() => getDocument(id), [getDocument, id]);

  return (
    <Dialog open={visible} onClose={onClose}>
      <div style={{ textAlign }}>
        <h2 className="breakword">{document?.title}</h2>
        <p></p>
        <h5>{document?.headline}</h5>
        <br />
        {!!document?.json && ContentfulContent({ json: document?.json })}
        <p></p>
      </div>
    </Dialog>
  );
}
