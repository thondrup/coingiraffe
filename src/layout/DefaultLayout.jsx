import React from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import FixedBottomNavBar from '../components/FixedBottomNavBar';

export default function DefaultLayout(props) {
  const { children, navigation, fiat, onFiatChange } = props;
  const navigate = useNavigate();

  return (
    <>
      <Header
        fiatOptions={['eur', 'usd']}
        selectedFiat={fiat}
        onFiatChange={onFiatChange}
      />
      <Box sx={{ pb: 7 }}>
        {children}
        <FixedBottomNavBar
          value={navigation}
          onChange={navigate}
        />
      </Box>
    </>
  );
};