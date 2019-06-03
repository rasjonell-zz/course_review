import React from 'react';
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
      title: 'Your Feedbacks',
      Component: <UserFeedbacks />
    },
    {
      title: 'Your Clusters',
      Component: 'Coming Soon'
    },
    {
      title: 'Your Issues',
      Component: 'Coming Soon'
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
