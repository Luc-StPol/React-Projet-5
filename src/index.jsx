import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/Index.scss';

import Home from './pages/Home';
import Logement from './pages/Logement';
import Propos from './pages/Propos';
import Error404 from './pages/error404';

import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <div className="globalStyle">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/logement/:logementI" element={<Logement />} />
          <Route path="/propos" element={<Propos />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </React.StrictMode>
);
