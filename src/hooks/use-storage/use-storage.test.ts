// import {renderHook, act, waitFor} from '@testing-library/react-native';

import {renderHook, act} from '@testing-library/react-hooks';

import {setStorageData} from '@sas/utils';

import {useStorage} from './use-storage';

describe('useStorage', () => {
  const key = 'useStorage-test';
  const value = 'demo';

  it('should returns initial state', async () => {
    const {result} = renderHook(() =>
      useStorage({
        key,
        value,
      }),
    );

    await act(() => {
      expect(result.current.isLoading).toBeTruthy();
      expect(result.current.data).toBe('demo');
    });
  });

  it('should call callback if it has stored value', async () => {
    setStorageData(key, value);

    const callbackMock = jest.fn();

    const {result, waitForNextUpdate} = renderHook(() =>
      useStorage({
        key,
        callback: callbackMock,
      }),
    );

    await waitForNextUpdate();
    expect(callbackMock).toHaveBeenCalledWith(value);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.data).toBe(value);
  });
});
