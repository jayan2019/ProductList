import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Product from '@/screens/product';
import Products from '@/screens/products';

export type RootStackParamList = {
  Products: undefined;
  Product: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement<any> => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
