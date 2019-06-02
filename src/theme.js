import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

export default theme =>
  createMuiTheme({
    palette: {
      type: theme,
      primary: {
        light: blue[500],
        main: theme === 'light' ? blue[600] : 'rgb(66, 66, 66)'
      },
      secondary: {
        main: '#fff'
      }
    },
    status: {
      danger: theme === 'light' ? red[800] : red[500]
    }
  });
