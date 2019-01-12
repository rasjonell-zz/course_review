import React from 'react';
import history from 'config/history';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const handleOnClick = (toggleDrawer, path = '/') => {
  toggleDrawer();
  history.push(path);
};

export default ({ toggleDrawer }) => (
  <div className="list">
    <List>
      <ListItem button onClick={() => handleOnClick(toggleDrawer)}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Posts" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem button onClick={() => handleOnClick(toggleDrawer, '/add-post')}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Add Post" />
      </ListItem>
    </List>
  </div>
);
