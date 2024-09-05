import React, { createContext, useContext, useState } from "react";
import { style } from "../styles/theme";

const themes = ["light", "dark"];

const Context = createContext(themes[0]);

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState(themes[0]);
  return (
    <Context.Provider style={style.themeCOntainer} value={{ theme, setTheme }}>
      {children}
    </Context.Provider>
  );
};

export const useTheme = () => {
  return useContext(Context);
};

export default ThemeContext;
