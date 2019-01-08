import React from 'react';
import { auth } from '../config/firebase';

const defaultAuthState = {
  user: null,
  authStateReported: false
};

export const AuthContext = React.createContext(defaultAuthState);

export default
class AuthContextProvider extends React.Component {
  state = defaultAuthState;

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({
      authStateReported: true,
      user
    }));
  }

  render() {
    const { children } = this.props;
    const { authStateReported, user } = this.state;

    return (
      <AuthContext.Provider value={{ authStateReported, user }}>
        {authStateReported ? children : <h1>Loading...</h1>}
      </AuthContext.Provider>
    )
  }
}