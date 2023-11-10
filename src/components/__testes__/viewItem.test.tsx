import React from 'react';
import {render, screen} from '@testing-library/react-native';

import ViewItem from '@/components/viewItem';

describe('ViewItem', () => {
  it('render without crashing', async () => {
    render(<ViewItem label={'label'} value={'value'} />);

    const label = await screen.findByText('label');
    expect(label).toBeTruthy();
  });

  it('should render amount', async () => {
    render(<ViewItem label={'label'} amount={2000} />);

    const amount = await screen.findByText('€2.000');
    expect(amount).toBeTruthy();
  });
});
