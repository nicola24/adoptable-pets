import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <p>
      HomePage Component
    </p>
    <Link to="/dashboard">
      Dashboard Component
    </Link>
  </div>
);

export default HomePage;
