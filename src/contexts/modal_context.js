import React from 'react';

const defaultModalState = {
  open: false,
  snackOpen: false
};

export const ModalContext = React.createContext(defaultModalState);

export default class ModalContextProvider extends React.Component {
  state = defaultModalState;

  setOpen = open => this.setState({ open });
  setSnackOpen = snackOpen => this.setState({ snackOpen });

  render() {
    const { open, snackOpen } = this.state;
    const { children } = this.props;

    return (
      <ModalContext.Provider
        value={{ open, snackOpen, setOpen: this.setOpen, setSnackOpen: this.setSnackOpen }}
      >
        {children}
      </ModalContext.Provider>
    );
  }
}
