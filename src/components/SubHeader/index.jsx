import React from 'react';
import { Box } from '@mui/material';
import SearchFilter from './SearchFilter';
import SubTitle from './SubTitle';

function SubHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 3,
        borderBottom: `${1}px solid`,
        borderColor: 'text.disabled',
      }}
    >
      <SubTitle />
      <SearchFilter />
    </Box>
  );
}

export default SubHeader;
