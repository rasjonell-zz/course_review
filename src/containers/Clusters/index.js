import React from 'react';
import Grid from '@material-ui/core/Grid';
import TrackItem from 'components/TrackItem';
import { withStyles } from '@material-ui/core';

import styles from './styles';

const Clusters = () => {
  return (
    <Grid container justify="space-around">
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TrackItem track="art" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TrackItem track="social" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <TrackItem track="quantative" />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Clusters);
