import React from 'react';
import { createUseStyles } from 'react-jss'
import { Outlet } from "react-router-dom"

const useStyles = createUseStyles({
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  }
});

export default function DefaultLayout() {
  const cls = useStyles();

  return (
    <div className={cls.page}>
      <Outlet />
    </div>
  );
};