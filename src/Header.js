import Link from "next/link";
import React, { useEffect } from "react";
import { Container, Flex } from "../styles/common.style";

import { HeaderNav, Logo, Menu } from "../styles/Header.style";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./hooks/globalContext";
export default function Header() {
  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  //   console.log("sethteme", currentTheme);

  useEffect(() => {
    window.localStorage.getItem("theme") == null
      ? dispatch({ type: "TOGGLE_THEME", theme: "dark" })
      : dispatch({
          type: "TOGGLE_THEME",
          theme: window.localStorage.getItem("theme"),
        });

    // console.log("sethteme", window.localStorage.getItem("theme"), currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    currentTheme === "dark"
      ? dispatch({ type: "TOGGLE_THEME", theme: "light" })
      : dispatch({ type: "TOGGLE_THEME", theme: "dark" });
  };

  const onCursor = (cursorType) => {
    // console.log(cursorType);
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <HeaderNav
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex sb noHeight>
          <Logo
            onMouseEnter={() => {
              onCursor("hoverred");
            }}
            onMouseLeave={onCursor}
          >
            <Link href={"/"}>HILLSUP</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => {
                onCursor("pointer");
              }}
              onMouseLeave={onCursor}
            ></span>
            <Link href={"/"}>STUDIO</Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  );
}
