import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Work from './pages/Work';
import PackagesPage from './pages/PackagesPage';
import Terms from './pages/Terms';
import Drive from './pages/Drive';
// import Process from './pages/Process';
import Process from './pages/Process updated';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="m" element={<Drive />} />

          <Route path="process" element={<Process />} />
          <Route path="contact" element={<Contact />} />
          <Route path="work" element={<Work />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="terms" element={<Terms />} />
          {/* Add the NotFound route as the last route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
