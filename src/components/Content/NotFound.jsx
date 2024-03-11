import { Box, Typography } from '@mui/material';
import React from 'react';

function NotFound() {
  return (
    <Box>
      <Typography variant="h6" component="h3">
        К сожалению, по данному запросу ничего не найдено
      </Typography>
    </Box>
  );
}
export default NotFound;
