import React, { useMemo } from 'react';
import DialogSlide from '../DialogSlide';
import LegacyModal from './LegacyModal';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: (props: { closeButton: JSX.Element }) => React.ReactNode;
}

export default function Dialog({
  open,
  onClose,
  children: _children,
}: DialogProps) {
  const closeButton = useMemo(() => {
    return (
      <button
        className="btn btn-primary"
        data-dismiss="modal"
        type="button"
        onClick={onClose}
        style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}
      >
        <i className="fa fa-times" style={{ marginRight: 5 }}></i> Tilbage
      </button>
    );
  }, [onClose]);

  const children = useMemo(
    () => _children({ closeButton }),
    [_children, closeButton],
  );

  return (
    <DialogSlide
      open={open}
      onClose={onClose}
      fullWidth
      sxPaper={{ maxWidth: 1210 }}
    >
      <LegacyModal onClose={onClose}>{children}</LegacyModal>
    </DialogSlide>
  );
}
