import React, { useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { ThemeContext } from 'contexts/theme_context';
import Filled from '@material-ui/icons/WbSunny';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Outlined from '@material-ui/icons/Brightness2';

export default ({ toggleDrawer }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const change = { dark: 'light', light: 'dark' };
  const handleClick = () => {
    toggleDrawer();
    setTheme(change[theme]);
  };

  const Icon = theme === 'dark' ? <Filled /> : <Outlined />;
  const primary = theme === 'dark' ? 'Day Mode' : 'Night Mode';

  return (
    <ListItem button onClick={handleClick}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );
};
