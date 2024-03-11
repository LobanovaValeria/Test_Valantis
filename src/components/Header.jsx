import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Valantis
        </Typography>
        <IconButton size="large" edge="start" color="inherit">
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
