import {StyleSheet} from 'react-native';

export const s = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    zIndex: 2,
  },
  entityImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 0,
  },
  cardInfo: {
    backgroundColor: '#ffffff',
    marginHorizontal: 15,
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: -35,
    shadowColor: 'rgba(0,0,0,0.8)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20,
  },
  giftCode: {
    paddingTop: 30,
    fontSize: 23,
    fontWeight: '500',
  },
  giftCodeText: {
    backgroundColor: '#00000009',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 0.8,
    gap: 2,
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    ustifyContent: 'center',
    marginTop: 9,
  },
  giftCodeTitle: {
    fontSize: 13,
    fontWeight: '400',
  },
  giftCodeDescription: {
    fontSize: 16,
    fontWeight: '600',
  },
  giftCodeDisclaimer: {
    fontSize: 15,
    fontWeight: '400',
    paddingVertical: 15,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    fontSize: 42,
    fontWeight: '500',
    color: 'green',
    marginBottom: 5,
  },
  transactionNo: {
    fontSize: 15,
    color: '#00000080',
    marginTop: 10,
  },
  transactionNoHeader: {
    fontSize: 16,
    color: '#000000',
    marginTop: 20,
  },
  footerTransaction: {
    marginVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#00000025',
  },
  dataGiftCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  infoLabel: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '400',
  },
  infoValue: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '600',
  },
  title: {
    marginHorizontal: 25,
    fontSize: 22,
    fontWeight: '500',
    color: '#ffffff',
    marginBottom: 25,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E6E6EC',
    padding: 10,
    borderRadius: 5,
  },
});
