import { useCallback, useState } from 'react';

export type UseBooleanStateProps = [boolean, () => void, () => void];

export function useBooleanState(initialValue: boolean) {
  const [value, setValue] = useState<boolean>(initialValue);
  const setValueFalse = useCallback(() => {
    setValue(false);
  }, []);
  const setValueTrue = useCallback(() => {
    setValue(true);
  }, []);

  return [value, setValueTrue, setValueFalse] as const;
}
