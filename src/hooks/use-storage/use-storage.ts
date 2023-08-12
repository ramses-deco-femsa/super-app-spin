import {useEffect, useState} from 'react';

import {getStorageData, setStorageData} from '@sas/utils';

type UseStorageProps<T> = {
  key: string;
  value?: T;
  callback?: (value: T) => void;
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
    if (typeof value === 'undefined') {
      return;
    }

    setStorageData<T>(key, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    getStorageData<T>(key).then(storedData => {
      if (storedData) {
        callback?.(storedData);
      }
      setState({
        isLoading: false,
        data: storedData,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    isLoading: state.isLoading,
    data: state.data,
  };
};
