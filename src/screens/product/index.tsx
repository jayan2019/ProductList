import React, {useRef, useEffect, useCallback} from 'react';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';
import {formatCurrency} from 'react-native-format-currency';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';

import {RootState} from '@/store';
import colors from '@/config/colors';
import {RootStackParamList} from '@/navigator';

interface IProductScreen
  extends NativeStackScreenProps<RootStackParamList, 'Product'> {}

// Mostly used "react-native" components
const Product = ({navigation}: IProductScreen): React.ReactElement => {
  const springAni = useRef(new Animated.Value(0)).current;
  // Get selected product from reducer
  const product = useSelector(
    (state: RootState) => state.product.selected_product,
  );
  // Format price number for Euro format
  const [formated] = formatCurrency({amount: product?.price || 0, code: 'EUR'});

  // spring Animation
  const spring = useCallback(() => {
    Animated.spring(springAni, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [springAni]);

  // Set header title once product name avilable
  useEffect(() => {
    if (product?.product_name) {
      navigation.setOptions({title: product?.product_name});
    }
  }, [navigation, product]);

  // Call image animation once image URL avilable
  useEffect(() => {
    if (product?.image) {
      spring();
    }
  }, [spring, product]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{uri: product?.image}}
        style={[styles.image, {transform: [{scale: springAni}]}]}
      />
      <View style={styles.detailContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{product?.product_name || '-'}</Text>
          <Text style={styles.amount}>{formated}</Text>
        </View>
        <ScrollView>
          <Text style={styles.description}>
            {product?.product_description || '-'}
          </Text>
        </ScrollView>
        <View style={styles.bottomContainer}>
          <Icon name="add-shopping-cart" type="material" color={colors.light} />
          <View style={styles.divider} />
          <Icon
            type="material"
            color={colors.light}
            name="remove-shopping-cart"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  image: {
    height: 200,
    width: '60%',
    borderRadius: 10,
  },
  detailContainer: {
    flex: 1,
    padding: 10,
    width: '100%',
    marginTop: 20,
    borderRadius: 10,
    paddingBottom: 0,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  titleContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    color: colors.light,
  },
  description: {
    fontSize: 14,
    color: colors.light,
    textAlign: 'justify',
  },
  divider: {
    width: 1,
    height: '100%',
    marginHorizontal: 20,
    backgroundColor: colors.light,
  },
  bottomContainer: {
    borderTopWidth: 1,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'center',
    borderColor: colors.light,
  },
});

export default Product;
