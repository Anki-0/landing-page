import { motion } from "framer-motion";
import styled from "styled-components";

//Banner
export const Banner = styled.div`
  background: ${(props) => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`;
export const Video = styled.div`
  height: 100%;
  width: 100%;
  video {
    object-fit: cover;
  }
`;
export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -63px;
  left: 0;
  color: ${(props) => props.theme.text};
  pointer-events: none;

  @media screen and (max-width: 768px) {
    left: -6px;
    bottom: -36px;
    max-width: calc(100% + 6px);
    font-size: 160px;
    line-height: 0.68125;
    overflow: hidden;
  }
`;

export const Headline = styled(motion.span)`
  display: block;
  font-size: 17rem;
  font-weight: 900;
  line-height: 0.76;

  @media (max-width: 1024px) {
    font-size: 16rem !important;
  }

  @media (max-width: 768px) {
    font-size: 10rem !important;
  }
  @media screen and (max-width: 624px) {
    font-size: 120px !important;
  }
  @media screen and (max-width: 425px) {
    font-size: 108px !important;
  }
`;
