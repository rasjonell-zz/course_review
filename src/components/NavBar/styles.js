export default theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  navBar: {
    top: 0,
    backgroundColor: theme.palette.type === 'light' && 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 5,
    backgroundColor: theme.palette.text
  },
  search: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 6,
      marginRight: theme.spacing.unit * 2,
      width: 610
    }
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.type === 'light' && 'black',
    paddingRight: theme.spacing.unit
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  }
});
