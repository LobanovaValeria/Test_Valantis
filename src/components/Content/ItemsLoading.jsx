import React from 'react';
import { Grid, Box, Card, Skeleton } from '@mui/material';

function ItemsLoading() {
  return (
    <Grid item xs={6}>
      <Card sx={{ minHeight: 180 }}>
        <Box sx={{ maxWidth: 525, display: 'flex', flexDirection: 'column', gap: 1, ml: 1, mt: 2 }}>
          <Skeleton height={35} />
          <Skeleton height={35} animation="wave" />
          <Skeleton height={35} animation={false} />
        </Box>
      </Card>
    </Grid>
  );
}

export default ItemsLoading;
