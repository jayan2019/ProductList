import React, {useRef, useEffect, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View, ScrollView, Animated} from 'react-native';

import {RootState} from '@/store';
import colors from '@/config/colors';
import ViewItem from '@/components/viewItem';

// Mostly used "react-native" components
const Product = (): React.ReactElement => {
  const navigation = useNavigation();
  const springAni = useRef(new Animated.Value(0)).current;
  // Get selected product from reducer
  const product = useSelector(
    (state: RootState) => state.product.selected_product,
  );

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
  }, [product]);

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

      <ScrollView style={styles.detailContainer}>
        <ViewItem label="Product Name" value={product?.product_name} />
        <ViewItem label="Price" amount={product?.price} />
        <ViewItem
          label="Brief Description"
          value={product?.product_description}
        />
      </ScrollView>
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
    backgroundColor: colors.white,
  },
});

export default Product;
