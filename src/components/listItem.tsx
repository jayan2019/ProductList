import React from 'react';
import {formatCurrency} from 'react-native-format-currency';
import {ListItem as BaseIListItem, Avatar} from '@rneui/themed';

import {IProduct} from '@/store/product/productSlice';

interface IListItem {
  item: IProduct;
  onPress: () => void;
}

const ListItem = ({onPress, item}: IListItem): React.ReactElement => {
  // Format price number for Euro format
  const [formated] = formatCurrency({amount: item.price, code: 'EUR'});

  return (
    <BaseIListItem bottomDivider onPress={onPress}>
      <Avatar source={{uri: item.image}} size="medium" />
      <BaseIListItem.Content>
        <BaseIListItem.Title>{item?.product_name}</BaseIListItem.Title>
        <BaseIListItem.Subtitle>{formated}</BaseIListItem.Subtitle>
      </BaseIListItem.Content>
      <BaseIListItem.Chevron />
    </BaseIListItem>
  );
};

export default ListItem;
