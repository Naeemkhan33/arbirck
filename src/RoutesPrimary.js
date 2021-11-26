import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './view/home/HomePage';

const RoutesPrimary = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
    </Routes>
  );
};

export default RoutesPrimary;
