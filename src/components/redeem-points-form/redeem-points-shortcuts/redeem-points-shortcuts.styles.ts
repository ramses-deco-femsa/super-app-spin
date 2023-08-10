import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  item: {
    width: '47.5%',
    gap: 4,
  },
  chipContainer: {
    justifyContent: 'center',
  },
  chipText: {
    color: COLORS.content_secondary,
    fontSize: 16,
    fontWeight: '600',
  },
  chipTextActive: {
    color: COLORS.active_status,
  },
  pointsText: {
    textAlign: 'center',
    color: COLORS.content_tertiary,
    fontSize: 12,
    fontWeight: '400',
  },
});
