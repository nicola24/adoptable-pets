import React from 'react';
import { render } from 'react-dom';

import 'animate.css/source/_base.css';

// import Dashboard from './components/Dashboard';
import App from './components/App';

const MOUNT_NODE = document.getElementById('app');

render(<App />, MOUNT_NODE);
