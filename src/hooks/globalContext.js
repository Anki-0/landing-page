import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { ThemeProvider } from "styled-components";

const darktheme = {
  background: "#000",
  text: "#fff",
  mousePointerColor: "#ea291e",
};
const lightheme = {
  background: "#fff",
  text: "#000",
  mousePointerColor: "#343739",
};

//Define context
const GlobalStateContext = createContext();
const GloabalDispatchContext = createContext();

//Reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      window.localStorage.setItem("theme", action.theme);
      return {
        ...state,
        currentTheme: action.theme,
      };
    }
    case "CURSOR_TYPE": {
      return { ...state, cursorType: action.cursorType };
    }

    default: {
      throw new Error(`Unhandled action type:${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: "dark",
    cursorType: false,
    cursorStyles: ["pointer", "hoverred"],
  });

  return (
    <GloabalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        <ThemeProvider
          theme={state.currentTheme === "dark" ? darktheme : lightheme}
        >
          {children}
        </ThemeProvider>
      </GlobalStateContext.Provider>
    </GloabalDispatchContext.Provider>
  );
};

//custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () =>
  useContext(GloabalDispatchContext);
