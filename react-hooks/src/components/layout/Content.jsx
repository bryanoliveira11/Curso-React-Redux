import './Content.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import UseState from '../../views/examples/UseState';

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/useState" element={<UseState />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </main>
);

export default Content;
