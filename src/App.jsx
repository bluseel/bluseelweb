import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navmenu from './components/Navmenu';

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Outlet />
    </div>
  );
};

export default App;
