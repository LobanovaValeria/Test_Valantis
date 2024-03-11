import { configureStore } from '@reduxjs/toolkit';
import filterSearch from './slices/filterSearch';
import filterBrand from './slices/filterBrand';
import filterPrice from './slices/filterPrice';
import forInputPrice from './slices/forInputPrice';
import forInputSearch from './slices/forInputSearch';

export const store = configureStore({
  reducer: {
    filterSearch,
    filterBrand,
    filterPrice,
    forInputPrice,
    forInputSearch,
  },
})