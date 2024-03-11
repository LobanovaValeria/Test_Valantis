import React, { useState, useEffect, useMemo } from 'react';
import Items from './Items';
import DefaultPagination from './DefaultPagination';
import { getIdsForAllPages, getIds, getItem } from '../../services/dataService';
import { Box, Grid } from '@mui/material';
import ItemsLoading from './ItemsLoading';
import { useSelector } from 'react-redux';
import NotFound from './NotFound';
import {FILTER, LIMIT, GET_IDS} from '../../services/constants';

function Content() {
  const search = useSelector((state) => state.filterSearch.search);
  const price = useSelector((state) => state.filterPrice.price);
  const brand = useSelector((state) => state.filterBrand.brand);
  const [items, setItems] = useState([]);
  const [pageAll, setpageAll] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const offset = page * LIMIT - LIMIT;
  let chekDuplicates = {};
  let id;
  const start = page * LIMIT - LIMIT;
  const end = page * LIMIT - 1;
  const spb = search || brand || price;
  const act = spb ? FILTER : GET_IDS;
  let par;

  switch (true) {
    case Boolean(search):
      par = { product: search };
      break;
    case Boolean(brand):
      par = { brand };
      break;
    case Boolean(price):
      par = { price };
      break;
    default:
      par = { offset, limit: 50 };
  }

  function _getIdsForAllPages() {
    getIdsForAllPages()
      .then((res) => {
        setpageAll(Math.ceil(res.data.result.length / 50));
      })
      .catch((e) => console.log(e));
  }

  async function postFetchItem() {
    try {
      const _getItem = await getItem(id);
      setItems(_getItem.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function postFetchAllId() {
    setIsLoading(true);

    if (pageAll === 0) {
      _getIdsForAllPages();
    }

    try {
      const _getIds = await getIds(act, par);
      if (act === FILTER) {
        id = [...new Set(_getIds.data.result)].slice(start, end);
        setpageAll(Math.ceil(id.length / 50));
      } else {
        id = [...new Set(_getIds.data.result)];
      }
      postFetchItem();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    postFetchAllId();
  }, [search, page, price, brand]);

  return (
    <>
      {items.length === 0 && act === FILTER ? (
        <NotFound />
      ) : (
        <>
          <Box sx={{ height: '60vh', overflow: 'auto' }}>
            <Grid ml={-3} container xs={12} md={12} spacing={3} m={0}>
              {isLoading
                ? [...Array(6)].map((_, i) => <ItemsLoading />)
                : items
                    .filter((item) => {
                      if (chekDuplicates[item.id]) {
                        chekDuplicates[item.id]++;
                        if (chekDuplicates[item.id] === 2) {
                          return false;
                        }
                      } else {
                        chekDuplicates[item.id] = 1;
                        return true;
                      }
                    })
                    .map((item) => <Items key={item.id} {...item} />)}
            </Grid>
          </Box>
          <DefaultPagination {...{ setPage, page, pageAll }} />
        </>
      )}
    </>
  );
}
export default Content;
