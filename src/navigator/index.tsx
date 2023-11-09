import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '@/config/colors';
import Product from '@/screens/product';
import Products from '@/screens/products';

export type ScreenNames = ['Products', 'Product'];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = (): React.ReactElement<any> => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.white, // Change header text color
        headerStyle: {backgroundColor: colors.primary}, // Change header background color
      }}>
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
