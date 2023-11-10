import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SearchBar, Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  FlatList,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import axios from '@/config/axios';
import colors from '@/config/colors';
import {StackNavigation} from '@/navigator';
import ListItem from '@/components/listItem';
import {IProduct, selectProduct} from '@/store/product/productSlice';

// Mostly used "react-native-elements" components
const Products = (): React.ReactElement => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigation>();

  const [loading, setLoading] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(false);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [searchedProducts, setSearchedProducts] = useState<IProduct[]>([]);

  // Fetch data from API
  const onLoadProducts = useCallback(
    async (fetch?: boolean) => {
      fetch ? setFetching(true) : setLoading(true);
      try {
        const {data} = await axios.get('/products');
        setProducts(data);
        fetch ? setFetching(false) : setLoading(false);
      } catch (e) {
        fetch ? setFetching(false) : setLoading(false);
      }
    },
    [setProducts, setLoading, setFetching],
  );

  // Load data when component mount
  useEffect(() => {
    onLoadProducts();
  }, [onLoadProducts]);

  // Search function
  const onSearch = (text?: string) => {
    if (!text) return setSearchText('');
    const searchResult = products.filter(
      product =>
        product.product_name
          .toLocaleLowerCase()
          .indexOf(text.toLocaleLowerCase()) > -1,
    );
    setSearchText(text);
    setSearchedProducts(searchResult);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <SearchBar
        platform="ios"
        value={searchText}
        placeholder="Type to search..."
        onChangeText={v => onSearch(v)}
        searchIcon={<Icon name="search" type="ionicon" />}
        clearIcon={
          <Icon
            type="ionicon"
            name="close-circle"
            onPress={() => setSearchText('')}
          />
        }
      />

      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="small" />
        </View>
      ) : null}

      <FlatList
        refreshing={fetching} // Loading indicator
        onRefresh={() => onLoadProducts(true)} // Pull-to-refresh functionality
        data={searchText ? searchedProducts : products}
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
    backgroundColor: colors.background,
  },
  loading: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default Products;
