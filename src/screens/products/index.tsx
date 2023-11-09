import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import axios from '@/config/axios';
import colors from '@/config/colors';
import ListItem from '@/components/listItem';
import {RootStackParamList} from '@/navigator';
import {IProduct, selectProduct} from '@/store/product/productSlice';

interface IProductsScreen
  extends NativeStackScreenProps<RootStackParamList, 'Products'> {}

// Mostly used "react-native-elements" components
const Products = ({navigation}: IProductsScreen): React.ReactElement => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  // Fetch data from API
  const onLoadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const {data} = await axios.get('/products');
      setProducts(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, [setProducts, setLoading]);

  // Load data when component mount
  useEffect(() => {
    onLoadProducts();
  }, [onLoadProducts]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <FlatList
        data={products}
        refreshing={loading} // Loading indicator
        onRefresh={onLoadProducts} // Pull-to-refresh functionality
        renderItem={({item}) => (
          <ListItem
            item={item}
            onPress={() => {
              dispatch(selectProduct(item)); // Set selected item to reducer
              navigation.navigate('Product'); // Navigate to Product screen
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.background,
  },
});

export default Products;
