import React from 'react';
import { database } from 'config/firebase';

const defaultRootState = {
  courses: null
};

export const RootContext = React.createContext(defaultRootState);

export default class RootContextProvider extends React.Component {
  state = defaultRootState;

  componentDidMount() {
    database.ref('courses').once('value', snapshot => this.setState({ courses: snapshot.val() }));
  }

  render() {
    const { children } = this.props;
    const { courses } = this.state;

    return <RootContext.Provider value={{ courses }}>{children}</RootContext.Provider>;
  }
}
