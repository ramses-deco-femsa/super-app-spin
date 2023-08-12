import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  splash: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 24,
    marginTop: '25%',
    gap: 40,
  },
  spinPlusLogo: {
    width: 100,
    height: 44,
    resizeMode: 'contain',
  },
  title: {
    color: COLORS.surface_primary,
    fontSize: 40,
    fontWeight: '500',
  },
  formCard: {
    backgroundColor: COLORS.surface_primary,
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  terms: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.content_tertiary,
  },
});
