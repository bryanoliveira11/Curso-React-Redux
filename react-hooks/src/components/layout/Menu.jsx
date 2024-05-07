import './Menu.css';
import React from 'react';

import { Link } from 'react-router-dom';

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/useState">useState()</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect()</Link>
        </li>
        <li>
          <Link to="/useRef">useRef()</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
