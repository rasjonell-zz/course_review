import React from 'react';
import { auth } from 'config/firebase';
import Loading from 'components/Loading';
import { getUser, createUser, updateUser } from 'helpers/user_helper';

const defaultAuthState = {
  user: null,
  authStateReported: false
};

export const AuthContext = React.createContext(defaultAuthState);

export default class AuthContextProvider extends React.Component {
  state = defaultAuthState;

  componentDidMount() {
    auth.onAuthStateChanged(async newUser => {
      if (newUser) {
        const preUser = await createUser(newUser);
        const user = preUser && (await getUser(preUser.uid));
        this.setState({ user, authStateReported: true });
      } else {
        this.setState({ user: null, authStateReported: true });
      }
    });
  }

  setUser = async user => {
    this.setState({ user: await updateUser(user) });
  };

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
