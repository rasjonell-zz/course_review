import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './loading.css';

export default ({ color = "primary", size = 100 }) => (
  <div className="loading-wrapper">
    <CircularProgress color={color} size={size} />
  </div>
);