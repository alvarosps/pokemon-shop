import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../../src/components/Search/Search';

describe('Search component', () => {
  it('should render correctly', () => {
    const mockQuery = 'mock query';
    const mockPlaceholder = 'mock placeholder';
    const mockOnSearch = jest.fn();

    render(
      <Search query={mockQuery} onSearch={mockOnSearch} placeholder={mockPlaceholder} />
    );

    const searchInput = screen.getByRole('textbox') as HTMLInputElement;
    expect(searchInput.value).toBe(mockQuery);
    expect(searchInput.placeholder).toBe(mockPlaceholder);
  });

  it('should call onSearch function when input value changes', () => {
    const mockOnSearch = jest.fn();

    render(<Search query="" onSearch={mockOnSearch} placeholder="" />);

    const searchInput = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'new query' } });

    expect(mockOnSearch).toHaveBeenCalledWith('new query');
  });
});
