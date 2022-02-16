import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MapView from './react-leaflet.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MapView />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
