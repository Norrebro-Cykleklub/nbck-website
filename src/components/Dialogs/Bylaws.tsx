import React from 'react';
import Dialog from './Dialog';

interface ByLawsDialogProps {
  visible: boolean;
  onClose: () => void;
}

export default function ByLawsDialog({ visible, onClose }: ByLawsDialogProps) {
  return (
    <Dialog open={visible} onClose={onClose}>
      {({ closeButton }) => (
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div id="nbroModalBody" className="modal-body">
              <h2 className="breakword">Vedtægter</h2>
              <p>Er på vej.</p>
              {closeButton}
            </div>
          </div>
        </div>
      )}
    </Dialog>
  );
}
