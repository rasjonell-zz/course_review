import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import trackInfo from 'config/track_info';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';

import styles from './styles';

const TrackItem = ({ classes, track, Actions }) => {
  const { image, title, label } = trackInfo(track);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label={track} className={classes[track]}>
            <Typography color="secondary">{label}</Typography>
          </Avatar>
        }
        title={title}
      />
      <CardActionArea>
        <CardMedia
          component={Link}
          to={`/clusters/${track}`}
          className={classes.media}
          image={image}
          title={title}
        />
      </CardActionArea>
      <CardActions className={classes.root}>{Actions}</CardActions>
    </Card>
  );
};

export default withStyles(styles)(TrackItem);
