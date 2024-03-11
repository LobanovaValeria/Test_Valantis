import React from 'react';
import SubHeader from './SubHeader';
import { Container } from '@mui/material';
import Content from './Content';

function Goods() {
  return (
    <>
      <Container sx={{ mt: 3 }}>
        <SubHeader />
        <Content />
      </Container>
    </>
  );
}

export default Goods;
