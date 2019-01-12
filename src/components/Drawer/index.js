import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SideList from './side_list';

import './drawer.css';

export default ({ open, toggleDrawer }) => (
  <div>
    <SwipeableDrawer open={open} onClose={() => toggleDrawer()} onOpen={() => toggleDrawer()}>
      <div role="button" onKeyDown={() => toggleDrawer()}>
        <SideList toggleDrawer={toggleDrawer} />
      </div>
    </SwipeableDrawer>
  </div>
);
