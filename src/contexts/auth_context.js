import React from 'react';
import { auth } from 'config/firebase';
import Loading from 'components/Loading';
import { getUser, saveUser } from 'helpers/user_helper';

const defaultAuthState = {
  user: null,
  authStateReported: false
};

export const AuthContext = React.createContext(defaultAuthState);

export default class AuthContextProvider extends React.Component {
  state = defaultAuthState;

  componentDidMount() {
    auth.onAuthStateChanged(async newUser => {
      const preUser = newUser && (await saveUser(newUser));
      const user = await getUser(preUser.uid);
      console.log(user);
      this.setState({ user, authStateReported: true });
    });
  }

  setUser = user => this.setState({ user });

  render() {
    const { children } = this.props;
    const { user, authStateReported } = this.state;

    return (
      <AuthContext.Provider value={{ user, setUser: this.setUser }}>
        {authStateReported ? children : <Loading />}
      </AuthContext.Provider>
    );
  }
}
