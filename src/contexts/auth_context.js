import React from 'react';
import { auth } from 'config/firebase';
import { saveUser } from 'helpers/user_helper';

const defaultAuthState = {
  user: null,
  authStateReported: false
};

export const AuthContext = React.createContext(defaultAuthState);

export default class AuthContextProvider extends React.Component {
  state = defaultAuthState;

  componentDidMount() {
    auth.onAuthStateChanged(async newUser => {
      const user = newUser && (await saveUser(newUser));
      this.setState({ user });
    });
  }

  render() {
    const { children } = this.props;
    const { user } = this.state;

    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
  }
}
