import React, { useCallback, useMemo } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DialogSlide from '../DialogSlide';
import LegacyModal from './LegacyModal';
import WithHover from '../WithHover';
import styled from 'styled-components';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  backButtonTitle?: string;
  backButtonOnClick?: () => void;
  children: React.ReactNode;
}

export default function Dialog({
  open,
  onClose,
  backButtonTitle,
  backButtonOnClick,
  children,
}: DialogProps) {
  const navbarHeight = 80;

  const closeButton = useMemo(() => {
    return (
      <CloseButtonContainerCss onClick={onClose}>
        <CloseIcon sx={{ fontSize: '3em' }} />
      </CloseButtonContainerCss>
    );
  }, [onClose]);

  const ModalContent = useCallback(
    ({ backButton }: { backButton: JSX.Element }) => (
      <>
        {children}
        {backButton}
      </>
    ),
    [children],
  );

  return (
    <DialogSlide
      open={open}
      onClose={onClose}
      fullWidth
      sxPaper={{
        maxWidth: 1210,
        maxHeight: `calc(100% - 64px - ${navbarHeight}px)`,
        margin: `190px 32px 112px 32px`,
      }}
    >
      <LegacyModal
        closeButton={closeButton}
        backButtonTitle={backButtonTitle ?? 'Tilbage'}
        backButtonOnClick={backButtonOnClick ?? onClose}
      >
        {ModalContent}
      </LegacyModal>
    </DialogSlide>
  );
}

const CloseButtonContainerCss = styled(WithHover)`
  position: absolute;
  display: flex;
  top: 25px;
  right: 25px;
`;
