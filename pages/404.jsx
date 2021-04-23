import React, { useRef, useEffect } from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";
import lottie from "lottie-web";
import svg from "../public/svg/error-404.json";
import { SvgContainer } from "../Container/SvgContainer";

export default function NotFound() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: svg,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Indapi | 404</title>
        <meta name="keywords" content="404" />
      </Head>
      <MainContainer full>
        <SvgContainer>
          <div className="container" ref={container}></div>
        </SvgContainer>
      </MainContainer>
    </>
  );
}
