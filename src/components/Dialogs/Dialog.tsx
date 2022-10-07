import React from 'react';
import DialogSlide from '../DialogSlide';
import LegacyModal from './LegacyModal';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Dialog({ open, onClose, children }: DialogProps) {
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
