import { useCallback } from 'react';
import windowSafe from '../components/utils/windowSafe';
import scrollIntoView from 'scroll-into-view';

export default function useScrollIntoView() {
  return useCallback((id: string) => {
    const options = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    } as ScrollIntoViewOptions;

    if (id === 'top') {
      return () => windowSafe?.scrollTo({ behavior: options.behavior, top: 0 });
    }

    return () => {
      const element = windowSafe?.document.getElementById(id);
      if (element) {
        scrollIntoView(element);
      }
    };
  }, []);
}
