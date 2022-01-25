import React, { useState, useEffect } from "react";
import Link from "next/link";

//Framer Motion
import { motion, useAnimation } from "framer-motion";
// Styled Components
import { Container, Flex } from "../styles/common.style";
import {
  HomeFeaturedSection,
  FeaturedVideo,
  FeaturedContent,
  FeaturedProjects,
} from "../styles/home.style";
import { useWindowSize as useSizes } from "@react-hook/window-size";

// Scroll Animations
import { useInView } from "react-intersection-observer";

const HomeFeatured = ({ onCursor }) => {
  const [width] = useSizes();

  const [hovered, setHovered] = useState(false);
  const animation = useAnimation();
  const [featured, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "-300px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <HomeFeaturedSection
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: { opacity: 0, y: 72 },
      }}
    >
      <Container>
        <Link href={"/"} passHref>
          <div>
            <FeaturedContent
              onHoverStart={() => setHovered(!hovered)}
              onHoverEnd={() => setHovered(!hovered)}
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Flex sb>
                <h3>Featured Project</h3>
                <motion.div
                  animate={{ opacity: hovered ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
                  className="meta"
                >
                  <h4>PEI Seafood</h4>
                  <h4>2019</h4>
                </motion.div>
              </Flex>
              <h2 className="featured-title">
                NOT <br /> HUMBLE
                <span className="arrow">
                  <motion.svg
                    animate={{ x: hovered ? 48 : 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.6, 0.05, -0.01, 0.9],
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 101 57"
                  >
                    <path
                      d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                      fill="#FFF"
                      fillRule="evenodd"
                    ></path>
                  </motion.svg>
                </span>
              </h2>
            </FeaturedContent>
            <FeaturedVideo>
              <video muted loop autoPlay width={width}>
                <source src={"/video.mp4"}></source>
              </video>
            </FeaturedVideo>
          </div>
        </Link>
      </Container>
      <Container>
        <FeaturedProjects>
          <Flex fe>
            <button>
              <span>All Projects</span>
            </button>
          </Flex>
        </FeaturedProjects>
      </Container>
    </HomeFeaturedSection>
  );
};

export default HomeFeatured;