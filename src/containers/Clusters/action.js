import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    width: '100%'
  }
};

export default withStyles(styles)(({ classes, track }) => (
  <Button
    component={Link}
    to={`/clusters/${track}`}
    size="medium"
    className={classes.button}
    color="inherit"
  >
    <Typography variant="subheading">Form A Cluster With This Track</Typography>
  </Button>
));
