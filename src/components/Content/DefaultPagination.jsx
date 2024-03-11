import React from 'react';
import { Pagination, Stack } from "@mui/material";

function DefaultPagination({setPage, pageAll,page}){
    return (
        <Stack spacing={2} sx={{ margin:`${20}px`}}>
             <Pagination size="large" sx={{marginX:'auto!important' }} onChange={(_, num)=>setPage(num)} count={pageAll} page={page} color="primary" />
      </Stack>
    );
}
export default DefaultPagination;