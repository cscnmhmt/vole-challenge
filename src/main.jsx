import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css';
import StyleGuide from './components/StyleGuide/StyleGuide';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <StyleGuide /> */}
  </React.StrictMode>
);
