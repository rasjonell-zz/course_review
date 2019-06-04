import { blue, red, deepPurple } from '@material-ui/core/colors';

export default theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    margin: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      maxWidth: 520
    }
  },
  media: {
    height: 250
  },
  art: {
    backgroundColor: blue[500]
  },
  social: {
    backgroundColor: deepPurple[500]
  },
  quantative: {
    backgroundColor: red[500]
  }
});
