import {useEffect, useState} from 'react';

import {getStorageData, setStorageData} from '@sas/utils';

type UseStorageProps<T> = {
  key: string;
  value?: T;
  callback?: (value: T) => Promise<void>;
};

export const useStorage = <T>({key, value, callback}: UseStorageProps<T>) => {
  const [state, setState] = useState<{
    isLoading: boolean;
    data: T | null;
  }>({
    isLoading: true,
    data: value || null,
  });

  useEffect(() => {
    getStorageData<T>(key).then(async storedData => {
      await callback?.(storedData!);
      setState({
        isLoading: false,
        data: storedData,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof value === 'undefined') {
      return;
    }

    setStorageData<T>(key, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return {
    isLoading: state.isLoading,
    data: state.data,
  };
};
