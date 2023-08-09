import React, {ReactNode} from 'react';
import {useEffect} from 'react';

import {Alert} from '@digitaltitransversal';

import {FullPageActivityIndicator} from '../full-page-activity-indicator';

type PrefetchLoaderProps = {
  loading: boolean;
  action?: () => Promise<unknown>;
  error?: string;
  children?: ReactNode;
};

export const PrefetchLoaderNavigator = ({
  loading,
  error,
  action,
  children,
}: PrefetchLoaderProps) => {
  useEffect(() => {
    if (loading || !action) {
      return;
    }

    const asyncLoader = async () => {
      try {
        await action();
      } catch (err) {}
    };

    asyncLoader();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      Alert.show({
        title: 'Something gone wrong',
        details: error,
        variant: 'error',
      });
    }
  }, [error]);

  if (loading) {
    return <FullPageActivityIndicator />;
  }

  return <>{children}</>;
};
