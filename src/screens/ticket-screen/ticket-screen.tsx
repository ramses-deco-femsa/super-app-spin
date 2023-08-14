import React, {useState} from 'react';
import {FlatList, Image, TextInput, TouchableOpacity, View} from 'react-native';

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {Trans, useTranslation} from 'react-i18next';

import {BottomSheet, Button, Modal, Text} from '@digitaltitransversal';
import {MOVEMENTS_ICON_MAPPER} from '@sas/constants';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';
import {ICONS} from '@sas/theme/iconsDimensions';
import BaseCard from '@sas/ui/components/Card/components/BaseCard';
import {formatCurrency} from '@sas/utils';

import {s} from './ticket-screen.styles';
import {formatDayMonthYearDate} from '../../utils/format-date/format-date';

export type TicketScreenProps = BottomTabScreenProps<
  RootStackParamList,
  RouteNames.TicketScreen
>;

export const TicketScreen = ({
  route: {
    params: {movement},
  },
}: TicketScreenProps) => {
  const {t} = useTranslation();
  const [inputChange, setInputChange] = useState({
    giftCode: '',
  });

  const onChange = (value: string, field: string) => {
    setInputChange({
      ...inputChange,
      [field]: value,
    });
  };
  const steepsInstructions = [
    {id: 1, description: <Trans i18nKey="ticketScreen.copyInstruction" />},
    {id: 2, description: <Trans i18nKey="ticketScreen.enterWebsite" />},
    {id: 3, description: <Trans i18nKey="ticketScreen.chooseYourPrize" />},
    {
      id: 4,
      description: <Trans i18nKey="ticketScreen.beforeFinishingYourPurchase" />,
    },
  ];

  return (
    <View>
      <View
        style={{
          backgroundColor: '#087D6F',
          height: 232,
        }}>
        <View style={s.imageContainer}>
          <Image
            source={MOVEMENTS_ICON_MAPPER[movement.entity]}
            style={s.entityImage}
            resizeMode="contain"
          />
        </View>
        <View style={s.cardInfo}>
          <Text style={s.giftCode}>{movement.entity}</Text>
          <Text style={s.giftCodeDisclaimer}>
            <Trans i18nKey="ticketScreen.copyInstructions" />
          </Text>
          <View style={s.giftCodeText}>
            <View style={s.infoContainer}>
              <Text variant="caption-medium" style={s.giftCodeTitle}>
                <Trans i18nKey="ticketScreen.giftCertificate" />
              </Text>
              <Text variant="caption-medium" style={s.giftCodeDescription}>
                {movement.giftCode}
              </Text>
            </View>
            <View style={s.iconContainer}>
              <Image
                style={{
                  height: ICONS.ICON_DIMENSIONS,
                  width: ICONS.ICON_DIMENSIONS,
                }}
                source={require('../../ui/assets/copy-icon.png')}
              />
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#ffffff'}}>
          <View>
            <Text
              style={{
                color: '#1623d3',
                fontWeight: '600',
                fontSize: 15,
                textAlign: 'center',
              }}
              onPress={() => {
                BottomSheet.show({
                  title: (
                    <Trans i18nKey="ticketScreen.howToUseGiftCard" />
                  ) as unknown as string,
                  children: (
                    <>
                      <FlatList
                        data={steepsInstructions}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item}) => (
                          <View
                            style={{
                              borderBottomColor: '#E6E6EC',
                              borderBottomWidth: 1,
                              paddingHorizontal: 16,
                            }}>
                            <Text
                              style={{
                                textAlign: 'left',
                                fontSize: 16,
                                marginVertical: 8,
                                marginHorizontal: 16,
                              }}>
                              {item.id}. {item.description}
                            </Text>
                          </View>
                        )}
                      />
                      <BaseCard
                        style={{
                          marginTop: 24,
                          marginBottom: 20,
                          marginHorizontal: 16,
                          borderRadius: 8,
                        }}
                        children={
                          <View
                            style={{
                              height: 169,
                              padding: 20,
                            }}>
                            <Text
                              style={{
                                fontSize: 12,
                              }}>
                              <Trans i18nKey="ticketScreen.payYourBaseRate" />{' '}
                              {movement.entity}.{' '}
                              <Trans i18nKey="ticketScreen.taxesAndAditionalProducts" />
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginTop: 20,
                              }}>
                              <TextInput
                                style={s.input}
                                onChangeText={value =>
                                  onChange(value, 'giftCode')
                                }
                                autoCorrect={false}
                                placeholder={t('ticketScreen.numberOfCredit')}
                              />
                              <TouchableOpacity
                                style={{
                                  backgroundColor: '#A12782',
                                  paddingHorizontal: 30,
                                  height: 40,
                                  alignSelf: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Text
                                  style={{
                                    textAlign: 'center',
                                    color: '#fff',
                                  }}>
                                  <Trans i18nKey="ticketScreen.activate" />
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        }
                      />
                    </>
                  ),
                  headerBackgroundColor: '#ffffff',
                  bodyBackgroundColor: '#ffffff',
                });
              }}>
              <Trans i18nKey="ticketScreen.howToUseGiftCard" />
            </Text>
            <BottomSheet.Component />
          </View>
          <View style={{marginHorizontal: 15, marginTop: 16}}>
            <View style={s.dataGiftCode}>
              <Text style={s.infoLabel}>
                <Trans i18nKey="ticketScreen.changedPoints" />:
              </Text>
              <Text style={s.infoValue}>{movement.points}</Text>
            </View>
            <View style={s.dataGiftCode}>
              <Text style={s.infoLabel}>
                <Trans i18nKey="ticketScreen.areWorth" />:
              </Text>
              <Text style={s.infoValue}>
                {formatCurrency(movement.points / 10)}
              </Text>
            </View>
            <View style={s.dataGiftCode}>
              <Text style={s.infoLabel}>
                <Trans i18nKey="ticketScreen.date" />:
              </Text>
              <Text style={s.infoValue}>
                {formatDayMonthYearDate(movement.date)}
              </Text>
            </View>
            <View style={s.dataGiftCode}>
              <Text style={s.infoLabel}>
                <Trans i18nKey="ticketScreen.areWorthUpTo" />:
              </Text>
              <Text style={s.infoValue}>
                {formatDayMonthYearDate(movement.expiryDate!)}
              </Text>
            </View>
          </View>
          <View style={s.footerTransaction}>
            <Text style={s.transactionNoHeader}>
              <Trans i18nKey="ticketScreen.transactionNumber" />
            </Text>
            <Text style={s.transactionNo}>{movement.transactionNo}</Text>
          </View>
          <View
            style={{
              marginHorizontal: 16,
              gap: 12,
            }}>
            <Button
              variant="primary"
              onPress={() => {
                Modal.show({
                  title: t('ticketScreen.yourTicketHasBeenSaved'),
                  description: t(
                    'ticketScreen.youCanSeeItInYourMovementHistory',
                  ),
                });
              }}
              text={t('ticketScreen.useGiftCertificate')}
            />
            <Button
              variant="secondary"
              text={t('ticketScreen.saveForAnotherTime')}
              onPress={() => {
                Modal.show({
                  title: t('ticketScreen.yourTicketHasBeenSaved'),
                  description: t(
                    'ticketScreen.youCanSeeItInYourMovementHistory',
                  ),
                });
              }}
            />
            <Modal.Component />
          </View>
        </View>
      </View>
    </View>
  );
};
