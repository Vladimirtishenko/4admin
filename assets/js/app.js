/* CSS */

import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../styl/builder.styl'

/* JS */

import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './router.js'

ReactDOM.render(
  <Routers />,
  document.getElementById('app')
);