import React from 'react';
import {render, screen} from '@testing-library/react-native';

import Product from '@/screens/product';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('Product screen', () => {
  it('render without crashing', async () => {
    render(<Product />);

    const amount = await screen.findByText('€0');
    expect(amount).toBeTruthy();
  });
});
