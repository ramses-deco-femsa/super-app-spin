import AsyncStorage from '@react-native-async-storage/async-storage';

import {setStorageData, getStorageData} from './storage';

describe('storage', () => {
  let keyStorage: string;
  const valueToStorage = {user: 'some_info'};

  describe('setStorageData', () => {
    beforeAll(() => {
      keyStorage = 'setStorageTests';
    });

    it('should dont storage anything that fails in JSON.stringify', async () => {
      const a = {};
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const b = {referencia: a};
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      a.circularRef = b;
      await setStorageData(keyStorage, a);
      await expect(AsyncStorage.setItem).not.toHaveBeenCalled();
    });

    it('should set storage data as a string', async () => {
      await setStorageData(keyStorage, valueToStorage);
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        keyStorage,
        JSON.stringify(valueToStorage),
      );
    });
  });

  describe('getStorageData', () => {
    beforeAll(() => {
      keyStorage = 'getStorageTests';
    });

    it('should return null if data dont exists', async () => {
      const data = await getStorageData(keyStorage);
      expect(data).toBeNull();
    });

    it('should return null and remove data if data cannot be parsed', async () => {
      (AsyncStorage.getItem as jest.Mock).mockReturnValueOnce({});
      const data = await getStorageData(keyStorage);
      expect(data).toBeNull();
      expect(AsyncStorage.removeItem).toHaveBeenCalledWith(keyStorage);
    });

    it('should return data if exists', async () => {
      await setStorageData(keyStorage, valueToStorage);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith(keyStorage);
      const data2 = await getStorageData(keyStorage);
      expect(data2).toEqual(valueToStorage);
    });
  });
});
