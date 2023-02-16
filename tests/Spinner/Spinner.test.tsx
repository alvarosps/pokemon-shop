import React from 'react';
import { render } from '@testing-library/react';
import Spinner from '../../src/components/Spinner/Spinner';

describe('Spinner', () => {
  it('should render the spinner', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('.spinner-container')).toBeInTheDocument();
    expect(container.querySelector('.spinner')).toBeInTheDocument();
  });
});
