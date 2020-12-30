import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';

ReactDOM.render(<Controller />, document.getElementById('root'));
registerServiceWorker();
