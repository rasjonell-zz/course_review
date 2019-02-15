export default theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  navBar: {
    backgroundColor: 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 5
  },
  title: {
    color: 'black',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      width: theme.spacing.unit * 40
    }
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    paddingRight: theme.spacing.unit
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  }
});
