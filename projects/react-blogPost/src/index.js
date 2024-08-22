import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Blog from './Blog';
import Events from './Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Blog />
    <Events />
    <Footer />
  </React.StrictMode>
);

