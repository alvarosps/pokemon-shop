import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header/Header';


describe('Header', () => {
  const mockFilterOptions = { moves: ['move1', 'move2'] };

  it('should render the component with the given title and search placeholder', () => {
    const mockOnSearch = jest.fn();
    render(
      <Header
        title="Test Title"
        query="test query"
        placeholder="Test Placeholder"
        onSearch={mockOnSearch}
        filterOptions={mockFilterOptions}
        onFilterChange={() => {}}
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });
});
