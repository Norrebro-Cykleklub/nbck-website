import { useEffect, useState, useCallback } from 'react';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  BodyScrollOptions,
} from 'body-scroll-lock';

const options: BodyScrollOptions = {
  reserveScrollBarGap: true,
};

interface LockBodyScrollProps {
  enabled: boolean;
  clearLocksOnUntoggle?: boolean;
  /** Should only be disabled if multiple scroll locks are active */
  disableiOStaskbarCompensation?: boolean;
}

function useLockBodyScroll({
  enabled = true,
  disableiOStaskbarCompensation = false,
  clearLocksOnUntoggle = true,
}: LockBodyScrollProps) {
  const [ref, setRef] = useState<Nullable<HTMLElement>>(null);

  const iOStaskbarCompensation = useCallback(() => {
    if (ref) {
      // Compensate for task bars laying on top of 100vh container
      const vh = window.innerHeight;
      ref.style.height = `${vh}px`;
      ref.scrollTo(0, 0);
    }
  }, [ref]);

  const iOStaskbarCompensationCleanup = useCallback(() => {
    if (ref) {
      window.removeEventListener('resize', iOStaskbarCompensation);
      ref.style.height = '100vh';
    }
  }, [iOStaskbarCompensation, ref]);

  useEffect(() => {
    if (ref && enabled) {
      if (!disableiOStaskbarCompensation) {
        window.addEventListener('resize', iOStaskbarCompensation);
      }
      disableBodyScroll(ref, options);

      return () => {
        if (!disableiOStaskbarCompensation) {
          iOStaskbarCompensationCleanup();
        }
        if (clearLocksOnUntoggle) {
          clearAllBodyScrollLocks();
        }
      };
    }
  }, [
    ref,
    enabled,
    clearLocksOnUntoggle,
    disableiOStaskbarCompensation,
    iOStaskbarCompensation,
    iOStaskbarCompensationCleanup,
  ]);

  return { setRef, clearAllBodyScrollLocks };
}

export default useLockBodyScroll;
