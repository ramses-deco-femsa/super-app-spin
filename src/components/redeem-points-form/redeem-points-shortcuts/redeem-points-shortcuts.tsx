import React, {ReactNode, useState} from 'react';
import {View} from 'react-native';

import {Trans} from 'react-i18next';

import {Chip, Text} from '@digitaltitransversal';
import {useRedeemPointsFormCtx} from '@sas/context';
import {COLORS} from '@sas/theme';
import {formatNumberWithCommas} from '@sas/utils';

import {styles} from './redeem-points-shortcuts.styles';

export const RedeemPointsShortcuts = () => {
  const {shortcutButtons, setPointsToRedeem} = useRedeemPointsFormCtx();
  const [activeShortcut, setActiveShortcut] = useState<number>();

  const renderButtons = () => {
    const rows: ReactNode[] = [];
    let row: ReactNode[] = [];

    shortcutButtons.forEach((pointsValue, index) => {
      if (index % 2 === 0 && index > 0) {
        rows.push(row);
        row = [];
      }

      const amount = pointsValue / 10;

      const isActive = pointsValue === activeShortcut;

      const backgroundColor = isActive
        ? COLORS.contextual_info_surface
        : COLORS.surface_secondary;

      row.push(
        <View
          key={`redeem-points-shortcut-chip-${pointsValue}`}
          style={styles.item}>
          <Chip
            text={'$' + formatNumberWithCommas(amount)}
            onPress={() => {
              setActiveShortcut(pointsValue);
              setPointsToRedeem('' + amount);
            }}
            disabled={isActive}
            backgroundColor={backgroundColor}
            borderColor={backgroundColor}
            textStyle={{
              ...styles.chipText,
              ...(isActive && styles.chipTextActive),
            }}
            containerStyle={styles.chipContainer}
            leftIcon={require('../../../ui/assets/spark-premia-icon.png')}
          />
          <Text style={styles.pointsText}>
            <Trans
              i18nKey="redeem_points.form.points"
              values={{points: formatNumberWithCommas(pointsValue)}}
            />
          </Text>
        </View>,
      );

      if (index === shortcutButtons.length - 1) {
        rows.push(row);
      }
    });

    return rows.map((shortcutRow, index) => (
      <View key={`redeem-points-shortcut-${index}`} style={styles.row}>
        {shortcutRow}
      </View>
    ));
  };

  return <View style={styles.container}>{renderButtons()}</View>;
};
