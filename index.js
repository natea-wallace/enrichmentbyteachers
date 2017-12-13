import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header.jsx';
import registerServiceWorker from './registerServiceWorkers';

ReactDOM.render (<Header/>, document.getElementById('root'));

registerServiceWorker();
