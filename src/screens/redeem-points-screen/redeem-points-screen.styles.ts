import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface_primary,
  },
  scrollContainer: {
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  buttonFixed: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
});
