import React from 'react';

const defaultModalState = {
  open: false
};

export const ModalContext = React.createContext(defaultModalState);

export default class ModalContextProvider extends React.Component {
  state = defaultModalState;

  setOpen = open => this.setState({ open });

  render() {
    const { open } = this.state;
    const { children } = this.props;

    return (
      <ModalContext.Provider value={{ open, setOpen: this.setOpen }}>
        {children}
      </ModalContext.Provider>
    );
  }
}
