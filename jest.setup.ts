import '@testing-library/jest-native/extend-expect';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', async () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// mock for ui ------------------------------------------------------------------------------
jest.mock('react-native-otp-verify', () => ({
  useOtpVerify: jest.fn(() => ({hash: '', otp: '', message: ''})),
}));

jest.mock('react-native-device-info', () =>
  require('react-native-device-info/jest/react-native-device-info-mock'),
);

jest.mock('@gorhom/bottom-sheet', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const react = require('react-native');

  return {BottomSheetFlatList: react.FlatList};
});

jest.mock('@digitaltitransversal', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const react = require('react-native');

  return {
    ...jest.requireActual('@digitaltitransversal'),
    BannerCarousel: react.View,
  };
});
// ------------------------------------------------------------------------------
