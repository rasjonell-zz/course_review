import React from 'react';
import history from 'config/history';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import routes from 'config/routes_menu';

const handleOnClick = (toggleDrawer, path = '/') => {
  toggleDrawer();
  history.push(path);
};

export default ({ toggleDrawer }) => (
  <div className="list">
    <List>
      {routes.map(route => (
        <>
          <ListItem button onClick={() => handleOnClick(toggleDrawer, route.path)}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={route.displayName} />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  </div>
);
