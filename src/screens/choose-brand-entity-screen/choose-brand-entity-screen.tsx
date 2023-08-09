import React from 'react';
import {Image, ScrollView, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {Trans, useTranslation} from 'react-i18next';

import {Card, Text} from '@digitaltitransversal';
import {PrefetchLoaderNavigator} from '@sas/components';
import {MOVEMENTS_ICON_MAPPER} from '@sas/constants';
import {useAppCtx} from '@sas/context';
import {RootStackParamList, RouteNames} from '@sas/navigation/navigation.types';

import {s} from './choose-brand-entity-screen.styles';

export type ChooseBrandEntityScreenProps = StackScreenProps<RootStackParamList>;

export const ChooseBrandEntityScreen = ({
  navigation,
}: ChooseBrandEntityScreenProps) => {
  const {brandEntities, getBrandEntities} = useAppCtx();
  const {t} = useTranslation();

  return (
    <PrefetchLoaderNavigator
      action={getBrandEntities}
      error={brandEntities.error}
      loading={brandEntities.loading}>
      <ScrollView style={s.scrollContainer} contentContainerStyle={s.container}>
        <Text style={s.sectionTitle}>
          <Trans i18nKey="redeem_points.choose_brand.title" />
        </Text>
        <View style={s.listContainer}>
          {brandEntities.data.map(brandEntity => (
            <Card
              testID="brand-card"
              key={`brand-to-choose-${brandEntity.entity}`}
              variant="content-inline"
              title={brandEntity.entity}
              icon={
                <Image
                  style={s.image}
                  source={MOVEMENTS_ICON_MAPPER[brandEntity.entity]}
                />
              }
              subtitle={t(
                `redeem_points.choose_brand.brand_entity.types.${brandEntity.type}`,
              )}
              onPress={() =>
                navigation.navigate(RouteNames.RedeemPointsScreen, {
                  brandEntity,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </PrefetchLoaderNavigator>
  );
};
