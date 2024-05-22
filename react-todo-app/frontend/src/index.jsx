import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './components/todo';
import About from './components/about';
import Menu from './components/menu';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Menu />
      <Todo />
      <About />
    </div>
  </React.StrictMode>,
);
