import React from 'react';
import { render } from '@testing-library/react';

import Editorial from './editorial';

describe('Editorial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Editorial />);
    expect(baseElement).toBeTruthy();
  });
});
