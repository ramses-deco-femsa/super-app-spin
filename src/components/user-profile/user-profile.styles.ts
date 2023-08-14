import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 8,
  },
  content: {
    flex: 1,
    paddingBottom: 16,
    gap: 24,
  },
  version: {
    color: COLORS.content_inverse_secondary,
    alignSelf: 'center',
  },
});
