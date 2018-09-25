import React from 'react';
import { render } from 'react-dom';

import 'animate.css/source/_base.css';

import Dashboard from './components/Dashboard';

const MOUNT_NODE = document.getElementById('app');

render(<Dashboard />, MOUNT_NODE);
