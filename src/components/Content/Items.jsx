import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function Items({ product, brand, price, id }) {
  return (
    <Grid item xs={6} pr={3}>
      <Card sx={{ minHeight: 212 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product}
          </Typography>
          <Typography color="primary" variant="h6">
            {brand}
          </Typography>
          <Typography color="#64DD17" variant="h6">
            Цена : <span>{price} ₽</span>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            id: {id}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default Items;
