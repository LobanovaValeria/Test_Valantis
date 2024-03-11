import React from 'react';
import { IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { useSelector, useDispatch } from 'react-redux';
import { setBrand } from '../../redux/slices/filterBrand';
import { setPrice } from '../../redux/slices/filterPrice';
import { setSearch } from '../../redux/slices/filterSearch';

function ClearFilter() {
  const search = useSelector((state) => state.filterSearch.search);
  const price = useSelector((state) => state.filterPrice.price);
  const brand = useSelector((state) => state.filterBrand.brand);
  const dispatch = useDispatch();
  const spb = search || price || brand;
  const onClear = () => {
    dispatch(setBrand(''));
    dispatch(setPrice(''));
    dispatch(setSearch(''));
  };
  return (
    <>
      {spb ? (
        <IconButton onClick={onClear}>
          <ClearIcon color="#FA5255" />
        </IconButton>
      ) : (
        <ClearIcon sx={{ opacity: '0' }} />
      )}
    </>
  );
}
export default ClearFilter;
