import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './pages/nav/Navbar';
import Navmenu from './pages/nav/Navmenu';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
