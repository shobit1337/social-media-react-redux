import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import { BottomBar, TopBar } from './components';

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
      <BottomBar />
    </>
  );
}

export default App;
