import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

export default createMuiTheme({
  palette: {
    primary: {
      main: blue[600]
    },
    secondary: {
      main: '#fff'
    }
  },
  status: {
    danger: red[500],
    warning: orange[800]
  }
});
