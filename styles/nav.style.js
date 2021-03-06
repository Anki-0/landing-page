import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #ea281e;
  color: #000;
  z-index: 100;
  overflow: hidden;
`;

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  h2 {
    color: ${(props) => props.theme.background};
  }
`;
export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${(props) => props.theme.background};
      margin: 8px;
    }
  }
`;

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 678px) {
    align-items: flex-start;
    margin-top: 10rem;
  }

  ul {
    padding: 0;
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      @media (max-width: 678px) {
        line-height: 58px;
        height: max-content;
      }
      .link {
        color: ${(props) => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        @media (max-width: 678px) {
          margin-left: 128px;
          font-size: 27px;
        }
        @media (max-width: 478px) {
          margin-left: unset !important;
          font-size: 24px;
          transform: unset !important;
          /* transform: translateX(-101px) !important; */

          &:hover {
            color: #fff;
            transform: unset !important;
          }
        }

        .arrow {
          height: 76px;
          margin-right: 8px;
          @media (max-width: 678px) {
            display: none;
          }
        }
      }
      svg {
        width: 100px;
        path {
          fill: ${(props) => props.theme.background};
        }
      }
    }
  }
`;
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: ${(props) => props.theme.background};
  }
  svg path {
    fill: ${(props) => props.theme.background};
  }

  @media (max-width: 478px) {
    div {
      flex-direction: column;
      gap: 2rem;
      margin: 0 1rem;
    }
  }
`;

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  @media (max-width: 478px) {
    margin-left: 108px;
    font-size: 24px;
    left: 28%;
  }

  .reveal {
    width: 100%;
    background: #ea281e;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    @media (max-width: 478px) {
      width: 100% !important;
    }
  }

  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;

      @media (max-width: 478px) {
        display: none;
      }
    }
  }
`;
