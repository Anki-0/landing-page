import React, { useEffect, useRef } from "react";

import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from "../styles/HomeBanner.style.js";
import { useGlobalStateContext } from "./hooks/globalContext.js";
import useWindowSize from "./hooks/useWindowSize.js";
import { useWindowSize as useSizes } from "@react-hook/window-size";

export default function HomeBanner({ onCursor }) {
  const [width, height] = useSizes();
  const windowSize = useWindowSize();

  const { currentTheme } = useGlobalStateContext();
  let canvas = useRef(null);
  console.log(width, height);

  useEffect(() => {
    let renderingElement = canvas.current;
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode();
    let drawingCtx = drawingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = currentTheme === "dark" ? "#000000" : "#ffffff";
    console.log("in useeffect=======>", currentTheme);
    renderingCtx.fillRect(0, 0, windowSize.width, windowSize.height);

    const _mouseover = (ev) => {
      console.log("Mouseover");
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };
    renderingElement.addEventListener("mouseover", _mouseover);

    renderingElement.addEventListener("click", (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    const _mouseup = (ev) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    };
    renderingElement.addEventListener("mouseup", _mouseup);

    const _mousemove = (ev) => {
      console.log(moving);
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    };
    renderingElement.addEventListener("mousemove", _mousemove);

    return () => {
      // Will be garbage collected
      drawingElement = null;
      drawingElement = renderingElement.cloneNode();
      // Also removing listeners
      renderingElement.removeEventListener("mouseover", _mouseover);
      renderingElement.removeEventListener("mouseup", _mouseup);
      renderingElement.removeEventListener("mousemove", _mousemove);
    };
  }, [width, height, windowSize, currentTheme]);

  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <Banner>
      <Video>
        <video autoPlay loop muted height="100%" width="100%">
          <source src={"/2.mp4"} />
        </video>
      </Video>
      <Canvas
        width={windowSize.width}
        height={windowSize.height}
        ref={canvas}
        onMouseLeave={() => onCursor("hoverred")}
      />
      <BannerTitle variants={parent} initial="initial" animate="animate">
        <Headline variants={child}>
          UP
          <br />
          HILLS
        </Headline>
        <Headline variants={child}>STUDIO</Headline>
      </BannerTitle>
    </Banner>
  );
}
