import React, { memo } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import Paper from '@mui/material/Paper';

export default memo(function Nav(props) {
  const { value, onChange, children } = props;

  return (
    <>
      <BottomNavigation />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            onChange(newValue);
          }}
        >
          {children}
        </BottomNavigation>
      </Paper>
    </>
  );
})