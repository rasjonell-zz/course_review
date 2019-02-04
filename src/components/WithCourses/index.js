import React from 'react';
import { RootContext } from 'contexts/root_context';

export default WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <RootContext.Consumer>
          {({ courses }) => <WrappedComponent courses={courses} {...this.props} />}
        </RootContext.Consumer>
      );
    }
  };
