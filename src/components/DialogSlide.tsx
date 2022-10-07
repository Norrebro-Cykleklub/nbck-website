import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { SxProps, Theme } from '@mui/material/styles';

interface DialogSlideProps {
  keepMounted?: boolean;
  sxPaper?: SxProps<Theme>;
  fullWidth?: boolean;
  fullScreen?: boolean;
  open: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  text?: { title: string; body: string; closeText: string; submitText: string };
  transitionProps?: DialogProps['TransitionProps'];
  children?: React.ReactNode;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogSlide({
  keepMounted,
  sxPaper,
  fullWidth,
  fullScreen,
  open,
  onClose,
  onSubmit,
  text,
  transitionProps,
  children,
}: DialogSlideProps) {
  return (
    <Dialog
      keepMounted={keepMounted}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      open={open}
      TransitionComponent={Transition}
      TransitionProps={{
        mountOnEnter: true,
        unmountOnExit: true,
        ...transitionProps,
      }}
      onClose={onClose}
      PaperProps={
        sxPaper ? { sx: { maxWidth: '786px', ...sxPaper } } : undefined
      }
    >
      {children ?? (
        <>
          <DialogTitle>{text?.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{text?.body}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>{text?.closeText}</Button>
            <Button onClick={onSubmit}>{text?.submitText}</Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
