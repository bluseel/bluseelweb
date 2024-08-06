import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <nav>
        <ul className="font-roboto flex gap-10 text-3xl">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white">
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
