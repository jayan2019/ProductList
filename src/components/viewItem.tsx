import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatCurrency} from 'react-native-format-currency';

import colors from '@/config/colors';

interface IViewItem {
  label: string;
  value?: string;
  amount?: number;
}

const ViewItem = (props: IViewItem) => {
  // Format price number for Euro format
  const [formated] = formatCurrency({amount: props.amount || 0, code: 'EUR'});

  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Text style={styles.label}>{props.label}</Text>
      </View>
      <View style={styles.rightCont}>
        <Text style={styles.value}>
          {props.value ? props.value : props.amount ? formated : '-'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: 'row',
  },
  leftCont: {
    flex: 1,
    paddingRight: 10,
    borderRightWidth: 1,
    borderColor: colors.light,
  },
  rightCont: {
    flex: 3,
    paddingLeft: 10,
  },
  label: {
    fontSize: 14,
    color: colors.light,
  },
  value: {
    fontSize: 16,
  },
});

export default ViewItem;
