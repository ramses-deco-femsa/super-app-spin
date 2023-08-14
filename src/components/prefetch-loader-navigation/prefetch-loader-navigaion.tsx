import React, {ReactNode} from 'react';
import {useEffect} from 'react';

import {SnackBar} from '@digitaltitransversal';

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
    if (!action) {
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
      SnackBar.show({
        text: error,
        variant: 'error',
        withIcon: true,
        iconName: 'icon-close',
        duration: 4000,
      });
    }
  }, [error]);

  if (loading) {
    return <FullPageActivityIndicator />;
  }

  return <>{children}</>;
};
