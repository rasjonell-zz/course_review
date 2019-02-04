import React from 'react';
import { AuthContext } from 'contexts/auth_context';

export default WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {({ user }) => <WrappedComponent user={user} {...this.props} />}
        </AuthContext.Consumer>
      );
    }
  };
