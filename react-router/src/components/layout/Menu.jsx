import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';

export default function Menu(props) {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/param/123">Param #01</Link>
          </li>
          <li>
            <Link to="/param/321">Param #02</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
