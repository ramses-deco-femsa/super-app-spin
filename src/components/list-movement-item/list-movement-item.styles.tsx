import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.stroke_secondary,
    gap: 12,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    color: COLORS.content_primary,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: COLORS.content_secondary,
  },
  points: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.content_secondary,
  },
});
