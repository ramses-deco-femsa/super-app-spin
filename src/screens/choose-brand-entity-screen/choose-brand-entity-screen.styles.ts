import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const s = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.surface_primary,
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.content_primary,
    marginBottom: 16,
  },
  listContainer: {
    gap: 16,
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: 'cover',
  },
});
