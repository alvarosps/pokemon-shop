import React from 'react';
import './Pagination.scss';
import { Button, ButtonGroup, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ currentPage, totalPages, pageSize, onPageChange, onPageSizeChange }) => {
  const pageNumbers = [];
  const numPages = Math.ceil(totalPages / pageSize);

  for (let i = 1; i <= numPages; i++) {
    pageNumbers.push(i);
  }

  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < numPages ? currentPage + 1 : null;

  const startIndex = Math.max(currentPage - 2, 0);
  const endIndex = Math.min(startIndex + 2, numPages - 1);
  const displayedPages = pageNumbers.slice(startIndex, endIndex + 1);

  const handlePageSizeChange = (event: SelectChangeEvent) => {
    onPageSizeChange(Number(event.target.value));
  };

  return (
    <nav className="pagination-container" data-testid='pagination'>
      <div className="pagination-items">
        <ButtonGroup className="pagination-buttons" variant="contained">
          <Button
            startIcon={<ChevronLeft />}
            disabled={prevPage == null}
            onClick={() => prevPage != null && onPageChange(prevPage)}
          />
          {displayedPages.map((page) => (
            <Button
              key={page}
              className={`page-item ${currentPage === page ? 'active' : ''}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            endIcon={<ChevronRight />}
            disabled={nextPage == null}
            onClick={() => nextPage != null && onPageChange(nextPage)}
          />
        </ButtonGroup>
        <Select
          className="pagination-select"
          value={pageSize.toString()}
          onChange={handlePageSizeChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </div>
    </nav>
  );
};

export default Pagination;
