export default theme => ({
  card: {
    marginLeft: theme.spacing.unit / 2,
    marginRight: theme.spacing.unit / 2,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    minWidth: 275,
    maxWidth: 600,
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  content: {
    display: 'flex'
  },
  actions: {
    justifyContent: 'space-between',
    marginRight: 12
  },
  rating: {
    display: 'inherit',
    alignItems: 'center'
  },
  ratedUp: {
    color: theme.palette.primary.main
  },
  ratedDown: {
    color: theme.status.danger
  }
});
