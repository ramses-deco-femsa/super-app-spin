import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const styles = StyleSheet.create({
  hint: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.content_tertiary,
    paddingHorizontal: 20,
    marginTop: 8,
  },
  otherLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.content_primary,
    marginBottom: 16,
  },
});
