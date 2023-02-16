import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../../src/components/Pagination/Pagination';

const mockOnPageChange = jest.fn();
const mockOnPageSizeChange = jest.fn();

const defaultProps = {
  currentPage: 1,
  totalPages: 100,
  pageSize: 10,
  onPageChange: mockOnPageChange,
  onPageSizeChange: mockOnPageSizeChange,
};

describe('Pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component without crashing', () => {
    render(<Pagination 
      currentPage={1}
      totalPages={100}
      pageSize={10}
      onPageChange={() => {}}
      onPageSizeChange={() => {}}
    />);
    const paginationElement = screen.getByTestId('pagination');
    expect(paginationElement).toBeInTheDocument();
  });

  it('should render the first three pages', () => {
    render(<Pagination {...defaultProps} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
  

  it('should call the onPageChange callback when clicking on a page number', () => {
    render(<Pagination {...defaultProps} />);
    const page3Button = screen.getByText('3');

    fireEvent.click(page3Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  
});
