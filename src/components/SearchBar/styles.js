export default theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    position: 'relative',
    color: theme.palette.text,
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  suggestion: {
    display: 'block'
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  input: {
    color: theme.palette.text
  },
  underline: {
    display: 'none'
  }
});
