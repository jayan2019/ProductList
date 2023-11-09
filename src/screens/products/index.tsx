import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Avatar, ListItem} from '@rneui/themed';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import axios from '@/config/axios';
import colors from '@/config/colors';
import {RootStackParamList} from '@/navigator';
import {IProduct, selectProduct} from '@/store/product/productSlice';

interface IProductsScreen
  extends NativeStackScreenProps<RootStackParamList, 'Products'> {}

const Products = ({navigation}: IProductsScreen): React.ReactElement => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);

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
        refreshing={loading}
        onRefresh={onLoadProducts}
        renderItem={({item}) => (
          <ListItem
            bottomDivider
            onPress={() => {
              dispatch(selectProduct(item));
              navigation.navigate('Product');
            }}>
            <Avatar rounded source={{uri: item.image}} />
            <ListItem.Content>
              <ListItem.Title>{item?.product_name}</ListItem.Title>
              <ListItem.Subtitle>{item?.price}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.white,
  },
});

export default Products;
