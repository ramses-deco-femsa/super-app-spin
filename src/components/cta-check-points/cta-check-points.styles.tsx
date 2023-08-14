import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  baseCard: {
    height: 204,
    borderRadius: 12,
  },
  cardsCtaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCard: {
    color: '#05053D',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.2,
    textAlign: 'center',
  },
});
