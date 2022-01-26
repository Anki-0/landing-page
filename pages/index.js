import { useState } from "react";
import Footer from "../src/Footer";
import HomeAbout from "../src/HomeAbout";
import HomeBanner from "../src/HomeBanner";
import HomeContent from "../src/HomeContent";
import HomeFeatured from "../src/HomeFeature";
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../src/hooks/globalContext";

export default function Home() {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles } = useGlobalStateContext();
  const onCursor = (cursorType) => {
    // console.log(cursorType);
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeatured onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
    </>
  );
}
