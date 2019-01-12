import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import { auth } from 'config/firebase';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class NavBar extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  };

  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSignOut = () => {
    auth.signOut();
    this.handleClose();
  }

  renderAuthBar = (open, anchorEl, user) => (
    <div>
      <IconButton
        aria-owns={open ? 'menu-appbar' : undefined}
        aria-haspopup="true"
        onClick={this.handleMenu}
        color="inherit"
      >
        <Avatar alt="Remy Sharp" src={user.photoURL} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </div>
  )

  render() {
    const { anchorEl } = this.state;
    const { user, classes } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Reddit Clone
            </Typography>
            {this.renderAuthBar(open, anchorEl, user)}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);