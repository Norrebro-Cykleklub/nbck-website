import React from 'react';
import Dialog from './Dialog';

interface TosDialogProps {
  visible: boolean;
  onClose: () => void;
}

export default function TosDialog({ visible, onClose }: TosDialogProps) {
  return (
    <Dialog open={visible} onClose={onClose}>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div id="nbroModalBody" className="modal-body">
            <h2 className="breakword">Vilkår for brug</h2>
            <p>Er på vej.</p>
            <button
              className="btn btn-primary"
              data-dismiss="modal"
              type="button"
              onClick={onClose}
            >
              <i className="fa fa-times"></i>
              Tilbage
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
