import React from 'react';
import {View, Text, Image} from 'react-native';

import {Trans} from 'react-i18next';

import {Card} from '@digitaltitransversal';
import {MOVEMENTS_ICON_MAPPER} from '@sas/constants';
import type {Movement} from '@sas/types';
import {formatCurrency, formatDayMonthYearDate} from '@sas/utils';

import {s} from './movement-detail.styles';

type MovementDetailProps = {
  movement: Movement;
};

export const MovementDetail = ({movement}: MovementDetailProps) => {
  const dateFrom = new Date(movement.date);
  dateFrom.setMonth(dateFrom.getMonth() + 3);

  return (
    <View testID="movement-detai" style={s.container}>
      <Card style={s.card}>
        <>
          <View style={s.imageContainer}>
            <Image
              style={s.image}
              source={MOVEMENTS_ICON_MAPPER[movement.entity]}
            />
          </View>
          <View testID="movement-detail-entity" style={s.cardSpacing}>
            <Text style={s.entityText}>{movement.entity}</Text>
          </View>
          <View style={[s.tag, s.cardSpacing]}>
            <Text style={s.tagText}>
              <Trans i18nKey="movements.detail.purchase_earned_points" />
            </Text>
          </View>
          <View testID="movement-detail-points" style={s.pointsContainer}>
            <Text style={s.pointsSymbol}>+</Text>
            <Text style={s.pointsText}>{movement.points}</Text>
          </View>
        </>
      </Card>

      <View testID="movement-detail-content" style={s.detailContainer}>
        <View style={s.detailRow}>
          <Text style={s.detailLabel}>
            <Trans i18nKey="movements.detail.total_amount" />
          </Text>
          <Text style={s.detailValue}>
            {formatCurrency(movement.points / 10)}
          </Text>
        </View>

        <View style={s.detailRow}>
          <Text style={s.detailLabel}>
            <Trans i18nKey="movements.detail.date" />
          </Text>
          <Text style={s.detailValue}>
            {formatDayMonthYearDate(movement.date)}
          </Text>
        </View>

        <View style={s.detailRow}>
          <Text style={s.detailLabel}>
            <Trans i18nKey="movements.detail.use_them_from" />
          </Text>
          <Text style={s.detailValue}>
            {formatDayMonthYearDate(dateFrom.toISOString())}
          </Text>
        </View>

        <View style={s.transactionNumberRow}>
          <Text style={s.transactionNumberLabel}>
            <Trans i18nKey="movements.detail.transaction_number" />
          </Text>
          <Text style={s.transactionNumber}>{movement.transactionNo}</Text>
        </View>
      </View>
    </View>
  );
};
