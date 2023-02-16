import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Filter from '../../src/components/Filter/Filter';
import userEvent from '@testing-library/user-event';

describe('Filter', () => {
  const filterOptions = {
    moves: ['move1', 'move2', 'move3', 'move4'],
  };

  it('should render filter options', async () => {
    const onFilterChange = jest.fn();
    render(<Filter filterOptions={filterOptions} onFilterChange={onFilterChange} />);
    const moveSelect = screen.getByLabelText('Move:');
    fireEvent.mouseDown(moveSelect);
    await waitFor(() => {
      const moveMenuItems = screen.getAllByRole('option');
      expect(moveMenuItems).toHaveLength(4);
      expect(moveMenuItems[0]).toHaveTextContent('move1');
      expect(moveMenuItems[1]).toHaveTextContent('move2');
      expect(moveMenuItems[2]).toHaveTextContent('move3');
      expect(moveMenuItems[3]).toHaveTextContent('move4');
    });
  });
  
});
