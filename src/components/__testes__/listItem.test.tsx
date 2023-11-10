import React from 'react';
import {render, screen} from '@testing-library/react-native';

import ListItem from '@/components/listItem';

const mocData = {
  createdAt: '2023-11-08T20:51:43.770Z',
  product_name: 'Car',
  image:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/160.jpg',
  price: 202.1,
  product_description:
    'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
  id: '1',
};

const onPress = jest.fn();
describe('ListItem', () => {
  it('render without crashing', async () => {
    render(<ListItem onPress={onPress} item={mocData} />);

    const name = await screen.findByText('Car');
    expect(name).toBeTruthy();
  });
});
