import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  resumePointsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
    alignItems: 'center',
  },
  labelHeader: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  resumePoints: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  pillContainer: {
    backgroundColor: '#C9E9F3',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 8,
    flexDirection: 'row',
    paddingVertical: 4,
  },
  sparkIconContainer: {
    marginLeft: 12,
    marginRight: 8,
  },
  iconDimensions: {
    height: 16,
    width: 16,
  },
  conversionPointsText: {
    color: '#006686',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    paddingVertical: 4,
    paddingRight: 12,
  },
});
