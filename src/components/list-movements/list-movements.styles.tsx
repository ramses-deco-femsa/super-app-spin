import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const s = StyleSheet.create({
  contentContainer: {
    minHeight: '100%',
  },
  title: {
    color: COLORS.content_primary,
    fontWeight: '700',
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  emptyImage: {
    width: 150,
    height: 150,
  },
  emptyText: {
    fontSize: 24,
    color: COLORS.content_primary,
  },
});
