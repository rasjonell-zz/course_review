import React from 'react';
import { onFetch } from 'helpers/fetch_helper';

const defaultRootState = {
  courses: null
};

export const RootContext = React.createContext(defaultRootState);

export default class RootContextProvider extends React.Component {
  state = defaultRootState;

  componentDidMount() {
    onFetch('courses', courses => this.setState({ courses }));
  }

  render() {
    const { children } = this.props;
    const { courses } = this.state;

    return <RootContext.Provider value={{ courses }}>{children}</RootContext.Provider>;
  }
}
