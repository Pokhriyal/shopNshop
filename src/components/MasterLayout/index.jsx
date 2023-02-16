import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Footer from '../FooterComponent';
import Header from '../HeaderComponent';
// import LanddingPageComponent from '../LanddingPageComponent';
import allProductsAction from '../../redux/actions/allProductsAction';

export default function MasterLayout() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(allProductsAction());
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ p: 0 }}>
        {/* <LanddingPageComponent /> */}
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
