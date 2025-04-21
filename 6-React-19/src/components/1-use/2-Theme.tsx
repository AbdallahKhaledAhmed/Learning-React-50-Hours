import { createContext, Dispatch, ReactNode, useState } from "react";

type contextData = [boolean, Dispatch<boolean>];

const themeContext = createContext<contextData>([false, () => {}]);
const Theme = ({ children }: { children: ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <themeContext.Provider value={[darkTheme, setDarkTheme]}>
      {children}
    </themeContext.Provider>
  );
};

export { Theme as ThemeProvider, themeContext };
