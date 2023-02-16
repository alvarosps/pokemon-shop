import React, { useState } from 'react';
import { IFilterOptions } from '../../types';
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface IFilterProps {
  filterOptions: IFilterOptions;
  onFilterChange: (selectedMoves: string[]) => void;
}

const Filter: React.FC<IFilterProps> = ({ filterOptions, onFilterChange }) => {
  const [selectedMoves, setSelectedMoves] = useState<string[]>([]);

  const handleMoveChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];
    console.log('value', value)
    setSelectedMoves(value);
  };

  const handleFilter = () => {
    onFilterChange(selectedMoves);
  };

  return (
    <div className="filter">
      <FormControl>
        <InputLabel id="move-select-label">Move:</InputLabel>
        <Select
          labelId="move-select-label"
          id="move-select"
          multiple
          value={selectedMoves}
          onChange={handleMoveChange}
          renderValue={(selected) => (selected as string[]).join(', ')}
        >
          {filterOptions.moves.map((move) => (
            <MenuItem key={move} value={move}>
              {move}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" onClick={handleFilter}>Filter</Button>
    </div>
  );
};

export default Filter;
