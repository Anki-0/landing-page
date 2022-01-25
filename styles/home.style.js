import { motion } from "framer-motion";
import styled from "styled-components";

//Content Section
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
`;
export const Content = styled(motion.h2)`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${(props) => props.theme.text};

  @media (max-width: 1024px) {
    margin-left: 0;
    font-size: 28px;
    width: 61%;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
  @media (max-width: 602px) {
    font-size: 24px;
  }
`;

//Featured Section
export const HomeFeaturedSection = styled(motion.div)`
  margin-bottom: 200px;
  position: relative;
  a {
    margin-bottom: 200px;
    position: relative;
    display: block;
  }
`;

export const FeaturedContent = styled(motion.div)`
  height: 480px;
  width: 100%;
  padding: 56px 124px;
  box-sizing: border-box;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    padding: 0;
  }

  h3 {
    font-size: 1.4rem;
  }
  .meta {
    display: flex;
    h4 {
      &:last-child {
        margin-left: 1rem;
      }
    }
  }
  .featured-title {
    position: absolute;
    bottom: -128px;
    font-size: 7rem;
    font-weight: 900;
    line-height: 90px;
    margin: 0;

    @media (max-width: 768px) {
      bottom: -9vw;
      font-size: 6rem;
    }
    @media (max-width: 478px) {
      bottom: 23vw;
      font-size: 4rem;
      line-height: 4rem;
    }
    .arrow {
      width: 120px;
      height: 80px;
      display: block;
      position: relative;
      overflow: hidden;
      svg {
        position: absolute;
        top: 16px;
        left: -48px;
        width: 108px;
        path {
          fill: ${(props) => props.theme.text};
        }
      }
    }
  }
`;

export const FeaturedVideo = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 480px;
  top: 0;
  display: block;
  overflow: hidden;
  video {
    width: 100%;
  }
  @media (max-width: 768px) {
    left: 0;
  }
`;

export const FeaturedProjects = styled.div`
  margin-top: 200px;
  button {
    background: #ea281e;
    color: #fff;
    position: relative;
    padding: 20px;
    display: block;
    text-align: left;
    font-size: 1.4rem;
    line-height: 1;
    font-weight: 600;
    border: none;
    span {
      margin-right: 108px;
      display: block;
    }
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 35px;
      height: 7px;
      display: block;
      background: #fff;
      transform: translateY(-50%);
    }
    &:before {
      margin-top: -8px;
    }
    &:after {
      margin-top: 8px;
    }
  }
`;

//ABOUT SECTION

export const HomeAboutSection = styled(motion.div)`
  /* margin-bottom: 200px; */
`;
export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-left: 124px;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 1024px) {
    p,
    h2 {
      margin-left: 12px;
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
      width: 100%;
    }
    p {
      font-size: 16px;
      margin-top: 35px;
      width: 90%;
      max-width: unset;
    }
  }
`;
export const Services = styled.div`
  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

//Accordion

export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: #ea281e;
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`;
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: #ea281e;
    transition: all 0.1s ease-in-out;
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: #ea281e;
    display: block;
    font-weight: 600;
  }
`;
