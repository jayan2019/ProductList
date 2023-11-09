import React from 'react';
import {render, screen} from '@testing-library/react-native';

import Products from '@/screens/products';

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

describe('Products screen', () => {
  it('render without crashing', async () => {
    render(<Products />);

    const searchCancelBtn = await screen.findByText('Cancel');
    expect(searchCancelBtn).toBeTruthy();
  });
});
