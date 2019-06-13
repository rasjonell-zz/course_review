import React from 'react';
import UserClusters from './user_clusters';
import UserFeedbacks from './user_feedbacks';
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import styles from './styles';

const Profile = ({ classes }) => {
  const panels = [
    {
      title: 'Your Top Feedbacks',
      Component: <UserFeedbacks />
    },
    {
      title: 'Your Clusters',
      Component: <UserClusters />
    },
    {
      title: 'Your Issues',
      Component: <Typography variant="body2">Coming Soon</Typography>
    }
  ];

  return (
    <div className={classes.root}>
      {panels.map(({ title, Component }, i) => (
        <ExpansionPanel key={i}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id={`panel${i + 1}a-header`}
          >
            <Typography align="center" className={classes.heading}>
              {title}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>{Component}</ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default withStyles(styles)(Profile);
