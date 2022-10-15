import { useEffect, useMemo, useState, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import throttle from 'lodash/throttle';
import { useCallback } from 'react';

interface ResizeObserverSize {
  left: number;
  top: number;
  width: number;
  height: number;
}

type ObservedElement = Nullable<HTMLElement>;

interface ResizeObserverProps {
  /** Interval between function executions */
  throttleInterval?: number;
  observedElement?: ObservedElement;
}

export default function useResizeObserver(props: ResizeObserverProps) {
  const [observedElement, setObservedElement] = useState(props.observedElement);
  const [observedElementSize, _setObservedElementSize] =
    useState<ResizeObserverSize | null>(null);

  const throttled = useRef(
    throttle(
      (newSize: ResizeObserverSize): void => {
        _setObservedElementSize(newSize);
      },
      props.throttleInterval ?? 0,
      { trailing: true, leading: false },
    ),
  );

  const setObservedElementSize = useCallback(
    (newSize: ResizeObserverSize) => {
      if (props.throttleInterval) {
        throttled.current(newSize);
        return;
      }

      _setObservedElementSize(newSize);
    },
    [props.throttleInterval],
  );

  const ro = useMemo(() => {
    return new ResizeObserver((entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect;
        setObservedElementSize({
          left,
          top,
          width,
          height,
        });
      }
    });
  }, [setObservedElementSize]);

  useEffect(() => {
    if (!observedElement) {
      return;
    }

    ro.observe(observedElement);
    return () => {
      ro.unobserve(observedElement);
    };
  }, [observedElement, ro]);

  return [observedElementSize, setObservedElement] as const;
}
