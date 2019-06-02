import React from 'react';
import useLocalStorage from 'hooks/use_local_storage';

const defaultUserState = {
  theme: 'light'
};

export const ThemeContext = React.createContext(defaultUserState);

export default ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
