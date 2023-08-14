import type {ImageProps} from 'react-native';

export const MOVEMENTS_ICON_MAPPER: {[key in string]: ImageProps['source']} = {
  ['Oxxo']: require('../../assets/images/oxxo.png'),
  ['Oxxo Gas']: require('../../assets/images/oxxo-gas.png'),
  ['Volaris']: require('../../assets/images/volaris.png'),
  ['Smart Fit']: require('../../assets/images/smart-fit.png'),
  ['VIX']: require('../../assets/images/vix.png'),
};
