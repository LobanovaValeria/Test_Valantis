import React, { useEffect, useCallback } from 'react';
import { TextField } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/slices/filterSearch';
import { setBrand } from '../../redux/slices/filterBrand';
import { setPrice } from '../../redux/slices/filterPrice';
import { debounce } from 'lodash-es';
import ClearIcon from '@mui/icons-material/Clear';
import { setInputSearch } from '../../redux/slices/forInputSearch';
import { setInputPrice } from '../../redux/slices/forInputPrice';

function Search() {
  const inputSearch = useSelector((state) => state.forInputSearch.inputSearch);
  const dispatch = useDispatch();

  const OptimizationSearch = useCallback(
    debounce((value) => {
      dispatch(setSearch(value));
    }, 1000),
    [],
  );

  const onChangeSearch = (event) => {
    const {
      target: { value },
    } = event;

    OptimizationSearch(value);
    dispatch(setBrand(''));
    dispatch(setPrice(''));
    dispatch(setInputSearch(value));
    dispatch(setInputPrice(''));
  };

  let [params, setParams] = useSearchParams();

  useEffect(() => {
    setParams({ inputSearch });
  }, [inputSearch]);

  return (
    <TextField
      endDecorator={<ClearIcon />}
      sx={{ mt: -2 }}
      onChange={onChangeSearch}
      value={inputSearch}
      id="standard-basic"
      label="Поиск"
      variant="standard"
    />
  );
}
export default Search;
