import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { handleRating } from 'helpers/rating_helper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ArrowUp from '@material-ui/icons/ArrowUpwardRounded';
import ArrowDown from '@material-ui/icons/ArrowDownwardRounded';

import styles from './styles';

const FeedbackCard = ({
  uid,
  user,
  more,
  rating,
  course,
  classes,
  feedback,
  feedback: { key, upvote = {}, downvote = {} },
  feedbackContent
}) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {more && course.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Posted by {user.displayName}
        </Typography>
        <Typography noWrap component="p">
          {feedbackContent}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <div className={classes.rating}>
          <IconButton
            size="small"
            onClick={() => handleRating(feedback, key, uid, 'upvote', 'downvote')}
          >
            <ArrowUp className={upvote[uid] && classes.ratedUp} />
          </IconButton>
          <Typography color="textPrimary">{rating}</Typography>
          <IconButton
            size="small"
            onClick={() => handleRating(feedback, key, uid, 'downvote', 'upvote')}
          >
            <ArrowDown className={downvote[uid] && classes.ratedDown} />
          </IconButton>
        </div>
        {more ? (
          <Button component={Link} to={`/courses/${course.id}`} size="small">
            Learn More
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

FeedbackCard.propTypes = {
  more: PropTypes.bool,
  uid: PropTypes.string,
  user: PropTypes.object,
  rating: PropTypes.number,
  course: PropTypes.object,
  feedback: PropTypes.object,
  feedbackContent: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeedbackCard);
