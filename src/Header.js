import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Container, Flex } from "../styles/common.style";

import { HeaderNav, Logo, Menu } from "../styles/Header.style";
import useElementPosition from "./hooks/ElementPosition";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./hooks/globalContext";

export default function Header({ onCursor, setHamburgerPosition }) {
  const { currentTheme, cursorStyles, toggleMenu } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const hamburger = useRef(null);
  const position = useElementPosition(hamburger);

  console.log(toggleMenu);

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
  const menuHover = () => {
    onCursor("locked");
    setHamburgerPosition({ x: position.x, y: position.y + 72 });
  };

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex sb noHeight>
          <Logo
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            <Link href="/">HILLs</Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            ></span>
            <Link href="/">UP</Link>
          </Logo>
          <Menu
            onClick={() => dispatch({ type: "TOGGLE_MENU", toggleMenu: true })}
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
          >
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
