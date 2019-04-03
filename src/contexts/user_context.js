import React from 'react';
import { onFetch } from 'helpers/fetch_helper';

const defaultUserState = {
  users: null
};

export const UserContext = React.createContext(defaultUserState);

export default class UserContextProvider extends React.Component {
  state = defaultUserState;

  componentDidMount() {
    onFetch('users', users => this.setState({ users }));
  }

  render() {
    const { children } = this.props;
    const { users } = this.state;

    return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>;
  }
}
