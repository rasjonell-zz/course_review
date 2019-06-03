import React from 'react';
import history from 'config/history';
import List from '@material-ui/core/List';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import ListItem from '@material-ui/core/ListItem';
import ProfileIcon from '@material-ui/icons/Person';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import routes from 'config/routes_menu';
import ToggleTheme from './dark_mode';

const Icon = icon =>
  ({
    home: <HomeIcon />,
    courses: <InboxIcon />,
    profile: <ProfileIcon />,
    clusters: <GroupWorkIcon />
  }[icon]);

const handleOnClick = (toggleDrawer, path = '/') => {
  toggleDrawer();
  history.push(path);
};

export default ({ toggleDrawer }) => (
  <div className="list">
    <List>
      {routes.map(({ displayName, path, icon }) => (
        <React.Fragment key={path}>
          <ListItem button onClick={() => handleOnClick(toggleDrawer, path)}>
            <ListItemIcon>{Icon(icon)}</ListItemIcon>
            <ListItemText primary={displayName} />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
    <Divider />
    <ToggleTheme toggleDrawer={toggleDrawer} />
  </div>
);
