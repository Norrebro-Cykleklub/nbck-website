import React from 'react';
import ContentfulText from '../ContentfulText';
import Dialog from './Dialog';

interface PriceBenefitsDialogProps {
  visible: boolean;
  onClose: () => void;
}

export default function PriceBenefitsDialog({
  visible,
  onClose,
}: PriceBenefitsDialogProps) {
  return (
    <Dialog open={visible} onClose={onClose}>
      <h2 className="breakword">
        <ContentfulText id={65} />
      </h2>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-3x">
            <i className="fa fa-plus fa-stack-1x"></i>
          </span>
          <p className="text-muted">
            <ContentfulText id={66} />
          </p>
        </div>
        <div className="col-md-8">
          <span className="fa-stack fa-3x">
            <i className="fa fa-money fa-stack-1x"></i>
          </span>
          <p className="text-muted">
            <ContentfulText id={67} />
          </p>
        </div>
      </div>
    </Dialog>
  );
}
