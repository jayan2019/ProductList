import React from 'react';
import {Avatar} from '@rneui/themed';
import {StyleSheet, Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import colors from '@/config/colors';
import {RootStackParamList} from '@/navigator';

interface IProductsScreen
  extends NativeStackScreenProps<RootStackParamList, 'Products'> {}

const Products = ({navigation}: IProductsScreen): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        size={32}
        onPress={() => navigation.navigate('Product')}
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
