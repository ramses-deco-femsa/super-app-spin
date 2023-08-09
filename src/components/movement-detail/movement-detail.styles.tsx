import {StyleSheet} from 'react-native';

import {COLORS} from '@sas/theme';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 16,
  },
  card: {
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 24,
    marginTop: 50,
    marginBottom: 24,
  },
  cardSpacing: {
    marginBottom: 16,
  },
  imageContainer: {
    position: 'absolute',
    top: '-40%',
    left: '50%',
    transform: [{translateX: -40}, {translateY: -40}],
    borderRadius: 36,
    shadowColor: COLORS.content_primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#FFF',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  entityText: {
    color: COLORS.content_primary,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  tag: {
    backgroundColor: COLORS.body,
    padding: 10,
    borderRadius: 36,
  },
  tagText: {
    color: COLORS.content_primary,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointsSymbol: {
    color: COLORS.active_status,
    fontSize: 24,
    fontWeight: '700',
  },
  pointsText: {
    color: COLORS.content_primary,
    fontSize: 40,
    fontWeight: '500',
  },
  detailContainer: {
    gap: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailLabel: {
    color: COLORS.content_secondary,
    fontSize: 16,
    fontWeight: '400',
  },
  detailValue: {
    color: COLORS.content_secondary,
    fontSize: 16,
    fontWeight: '600',
  },
  transactionNumberRow: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.content_secondary,
    paddingTop: 16,
    gap: 8,
  },
  transactionNumberLabel: {
    color: COLORS.content_primary,
    fontSize: 16,
    fontWeight: '400',
  },
  transactionNumber: {
    color: COLORS.content_tertiary,
    fontSize: 16,
    fontWeight: '400',
  },
});
