import { useCallback } from 'react';
import windowSafe from '../components/utils/windowSafe';

export default function useScrollIntoView() {
  const scrollIntoView = useCallback((id: string) => {
    const options = {
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    } as ScrollIntoViewOptions;

    if (id === 'top') {
      return () => windowSafe?.scrollTo({ behavior: options.behavior, top: 0 });
    }

    return () => document.getElementById(id)?.scrollIntoView(options);
  }, []);

  return scrollIntoView;
}
