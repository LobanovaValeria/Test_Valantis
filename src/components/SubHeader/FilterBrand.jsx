import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';
import { setBrand } from '../../redux/slices/filterBrand';
import { setSearch } from '../../redux/slices/filterSearch';
import { setPrice } from '../../redux/slices/filterPrice';
import { setInputPrice } from '../../redux/slices/forInputPrice';
import { setInputSearch } from '../../redux/slices/forInputSearch';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const brands = [
  'Piaget',
  'Jacob & Co',
  'Cartier',
  'Bibigi',
  'Van Cleef & Arpels',
  'Pomellato',
  'Bvlgari',
  'Pasquale Bruni',
  'ЭПЛ Якутские бриллианты',
  'Chopard',
  'Baraka',
  'Casato',
  'Imma',
  'Faberge',
  'Roberto Coin',
  'Damiani',
  'Carrera y Carrera',
  'De Beers',
  'Audemars Piguet',
  'Mikimoto',
  'Giorgio Visconti',
  'Stephen Webster',
  'Chaumet',
  'Tiffany & Co',
  'Franck Muller',
  'De Grisogono',
  'Mauboussin',
  'Casa Gi',
  'Alfieri & St.John',
];

export default function FilterBrand({ handleClose }) {
  const brandName = useSelector((state) => state.filterBrand.brand);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setBrand(event.target.value));
    dispatch(setSearch(''));
    dispatch(setPrice(0));
    dispatch(setInputPrice(''));
    dispatch(setInputSearch(''));
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Бренд</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          value={brandName}
          onChange={handleChange}
          input={<OutlinedInput label="Brand" />}
          MenuProps={MenuProps}
        >
          {brands.map((brand) => (
            <MenuItem key={brand} value={brand}>
              <ListItemText onChange={handleChange} primary={brand} value={brand} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
