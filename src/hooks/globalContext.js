import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { ThemeProvider } from "styled-components";
import Navigation from "../Nav";
import Header from "../Header";
import CustomCurson from "../CustomCurson";
import Footer from "../Footer";

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
    case "TOGGLE_MENU": {
      return { ...state, toggleMenu: action.toggleMenu };
    }

    default: {
      throw new Error(`Unhandled action type:${action.type}`);
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  });

  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme: "dark",
    cursorType: false,
    cursorStyles: ["pointer", "hoverred", "locked", "white"],
    toggleMenu: false,
  });

  const onCursor = (cursorType) => {
    // console.log(cursorType);
    cursorType =
      (state.cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <GloabalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        <ThemeProvider
          theme={state.currentTheme === "dark" ? darktheme : lightheme}
        >
          <Header
            onCursor={onCursor}
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
            hamburgerPosition={hamburgerPosition}
            setHamburgerPosition={setHamburgerPosition}
            // siteTitle={data.site.siteMetadata.title}
          />
          <CustomCurson />

          <Navigation
            toggleMenu={state.toggleMenu}
            setToggleMenu={setToggleMenu}
            onCursor={onCursor}
            setHamburgerPosition={setHamburgerPosition}
          />
          {children}
          <Footer
            onCursor={onCursor}
            hamburgerPosition={hamburgerPosition}
            setHamburgerPosition={setHamburgerPosition}
          />
        </ThemeProvider>
      </GlobalStateContext.Provider>
    </GloabalDispatchContext.Provider>
  );
};

//custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () =>
  useContext(GloabalDispatchContext);
