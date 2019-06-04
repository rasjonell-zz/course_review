export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },
  field: {
    margin: theme.spacing.unit * 4
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 300,
    maxWidth: 500
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit / 4
  }
});
