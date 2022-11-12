import React from "react";
import MainInfo from "../components/home/MainInfo";

import SlideShow from "../components/home/SlideShow";

export default function Home() {
  return (
    <>
      <div className="min-h-full">
        <MainInfo />
        <SlideShow />
      </div>
    </>
  );
}
