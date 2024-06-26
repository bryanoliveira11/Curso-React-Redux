import './Content.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../views/examples/Home';
import NotFound from '../../views/examples/NotFound';
import UseState from '../../views/examples/UseState';
import UseEffect from '../../views/examples/UseEffect';
import UseRef from '../../views/examples/UseRef';
import UseMemo from '../../views/examples/UseMemo';
import UseCallback from '../../views/examples/UseCallback';
import UseContext from '../../views/examples/UseContext';
import UseReducer from '../../views/examples/UseReducer';
import UseMyHook from '../../views/examples/UseCustom';

const Content = (props) => (
  <main className="Content">
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/useState" element={<UseState />}></Route>
      <Route path="/useEffect" element={<UseEffect />}></Route>
      <Route path="/useRef" element={<UseRef />}></Route>
      <Route path="/useMemo" element={<UseMemo />}></Route>
      <Route path="/useCallback" element={<UseCallback />}></Route>
      <Route path="/useContext" element={<UseContext />}></Route>
      <Route path="/useReducer" element={<UseReducer />}></Route>
      <Route path="/useMyHook" element={<UseMyHook />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </main>
);

export default Content;
