import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  pointsText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoIcon: {
    tintColor: '#1723D3',
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.stroke_secondary,
    marginVertical: 16,
  },
  chipText: {
    color: COLORS.contextual_points_content,
    fontSize: 14,
  },
});
