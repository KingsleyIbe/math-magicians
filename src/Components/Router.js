import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import Quote from '../pages/Quote';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Header from './Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
