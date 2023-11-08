import React from 'react';
import {Avatar} from '@rneui/themed';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import colors from '@/config/colors';
import {RootStackParamList} from '@/navigator';
import {selectProduct} from '@/store/product/productSlice';

interface IProductsScreen
  extends NativeStackScreenProps<RootStackParamList, 'Products'> {}

const Products = ({navigation}: IProductsScreen): React.ReactElement => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={32}
        onPress={() => {
          dispatch(
            selectProduct({
              price: 20,
              product_name: 'Water 20L',
              image: 'this_is_image_url',
              product_description: '20L water bottle',
            }),
          );
          navigation.navigate('Product');
        }}
        containerStyle={{backgroundColor: colors.primary}}
        icon={{name: 'product-hunt', type: 'font-awesome'}}
      />
      <Text>Products Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
  },
});

export default Products;
