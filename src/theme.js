import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import indigo from '@material-ui/core/colors/indigo';
import deepPurple from '@material-ui/core/colors/deepPurple';

export default createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: indigo
  },
  status: {
    danger: red
  }
});
