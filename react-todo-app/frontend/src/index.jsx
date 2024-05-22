import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todo from './components/todo';
import About from './components/about';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Todo />
      <About />
    </div>
  </React.StrictMode>,
);
