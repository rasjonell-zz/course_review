import React from 'react';
import Grid from '@material-ui/core/Grid';
import TrackItem from 'components/TrackItem';
import { withStyles } from '@material-ui/core';

import Action from './action';
import styles from './styles';

const GridItem = track => (
  <Grid key={track} item xs={12} sm={6} md={6} lg={4}>
    <TrackItem {...{ track, Actions: [<Action track={track} />] }} />
  </Grid>
);

const Clusters = () => {
  return (
    <Grid container justify="space-around">
      {['art', 'social', 'quantative'].map(track => GridItem(track))}
    </Grid>
  );
};

export default withStyles(styles)(Clusters);
