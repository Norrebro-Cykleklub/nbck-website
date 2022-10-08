import 'intersection-observer';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Sections, useLayoutContext } from '../components/Layout/Context';

export default function useSectionInView(sectionId?: Sections) {
  const { sectionInView } = useLayoutContext();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (sectionId && inView) {
      sectionInView.set(sectionId);
    }

    return () => {
      sectionInView.set(null);
    };
  }, [inView, sectionId, sectionInView]);

  return { ref, inView: sectionInView.id };
}
