import React from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

function SubTitle() {
  const inputSearch = useSelector((state) => state.forInputSearch.inputSearch);
  const inputPrice = useSelector((state) => state.forInputPrice.inputPrice);
  const brand = useSelector((state) => state.filterBrand.brand);
  const spb = inputSearch || inputPrice || brand;
  let title;
  let specificTitle;
  switch (true) {
    case Boolean(inputSearch):
      title = 'названию';
      specificTitle = inputSearch;
      break;
    case Boolean(brand):
      title = 'брэнду';
      specificTitle = brand;
      break;
    case Boolean(inputPrice):
      title = 'цене';
      specificTitle = inputPrice;
      break;
    default:
      title = 'Все товары';
  }
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant="h4">
        {spb ? `Поиск по ${title} : ${specificTitle}` : `${title}`}
      </Typography>
    </Box>
  );
}
export default SubTitle;
