import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from '@/store';

const Product = (): React.ReactElement => {
  const product = useSelector(
    (state: RootState) => state.product.selected_product,
  );

  return (
    <View>
      <Text>Product Screen</Text>
      <Text>{product?.product_name || '-'}</Text>
    </View>
  );
};

export default Product;
