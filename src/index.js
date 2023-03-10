import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root/index';
import RootContext from './context/index';
import 'antd/dist/reset.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);


