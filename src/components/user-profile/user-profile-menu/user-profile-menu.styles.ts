import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
  },
  menutItem: {
    borderBottomColor: COLORS.stroke_secondary,
    borderBottomWidth: 1,
  },
});
