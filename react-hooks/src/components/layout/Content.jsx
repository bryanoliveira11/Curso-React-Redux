import './Content.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import UseState from '../../views/examples/UseState';
import UseEffect from '../../views/examples/UseEffect';
import UseRef from '../../views/examples/UseRef';
import UseMemo from '../../views/examples/UseMemo';

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/useState" element={<UseState />}></Route>
      <Route path="/useEffect" element={<UseEffect />}></Route>
      <Route path="/useRef" element={<UseRef />}></Route>
      <Route path="/useMemo" element={<UseMemo />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </main>
);

export default Content;
