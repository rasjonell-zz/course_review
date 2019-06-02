export default theme => ({
  main: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  emptyMain: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: '12vh'
  },
  feedbackButton: {
    marginTop: theme.spacing.unit,
    backgroundColor: theme.palette.primary.light
  },
  field: {
    marginTop: theme.spacing.unit * 2
  }
});
