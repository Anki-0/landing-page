import React, { useState } from "react";
import Link from "next/link";
//Styled Components
import { Container, Flex } from "../styles/common.style";
import {
  Nav,
  NavHeader,
  NavList,
  NavFooter,
  NavVideos,
  CloseNav,
} from "../styles/nav.style";
import { FooterContent, FooterSocial } from "../styles/footer.style";
//Icons
import { Instagram, Facebook, Vimeo } from "../public/socialIcons";

//Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "./hooks/globalContext";

const navRoutes = [
  {
    id: 0,
    title: "not humble",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
];

const Navigation = ({ setToggleMenu, onCursor }) => {
  const dispatch = useGlobalDispatchContext();
  const { toggleMenu, cursorType } = useGlobalStateContext();
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "1.mp4",
    key: "0",
  });

  console.log(toggleMenu);

  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            onMouseMoveCapture={() =>
              dispatch({ type: "CURSOR_TYPE", cursorType: "white" })
            }
            onMouseLeave={() =>
              dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
            }
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2 to="/">Projects</h2>
                  <CloseNav
                    onClick={() =>
                      dispatch({ type: "TOGGLE_MENU", toggleMenu: !toggleMenu })
                    }
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      onHoverStart={() =>
                        setRevealVideo({
                          show: true,
                          video: route.video,
                          key: route.id,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          show: false,
                          video: route.video,
                          key: route.id,
                        })
                      }
                    >
                      <Link href={`/projects${route.path}`} passHref>
                        <motion.div
                          initial={{ x: -108 }}
                          className="link"
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#000"
                                fillRule="evenodd"
                              ></path>
                            </motion.svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>info@hillsup.studio</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>902.315.1279</p>
                  </FooterContent>
                  <FooterSocial className="footerSocial">
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Instagram />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Facebook />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                      target="_blank"
                    >
                      <Vimeo />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                  className="reveal"
                ></motion.div>
                <motion.div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      src={`./3.mp4`}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      loop
                      autoPlay
                    ></motion.video>
                  </AnimatePresence>
                </motion.div>
              </NavVideos>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
