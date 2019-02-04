import React from 'react';
import { auth } from 'config/firebase';
import Loading from 'components/Loading';
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
      this.setState({ user, authStateReported: true });
    });
  }

  render() {
    const { children } = this.props;
    const { user, authStateReported } = this.state;

    return (
      <AuthContext.Provider value={{ user }}>
        {authStateReported ? children : <Loading />}
      </AuthContext.Provider>
    );
  }
}
