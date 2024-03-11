import React from 'react';
import { Box } from '@mui/material';
import Search from './Search';
import Filter from './Filter';


function SearchFilter() {
  return (
    <Box sx={{ display: 'flex', height: '6ch', alignItems: 'center' }}>
      <Search />
      <Filter />
    </Box>
  );
}
export default SearchFilter;
