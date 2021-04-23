import React, { useRef, useEffect } from "react";
import { MainContainer } from "../Container/MainContainer";
import { SPageHeader, SPageParagraph } from "../Components/Text";
import { UsbOutlined } from "@ant-design/icons";
import Head from "next/head";
import styled from "styled-components";
import { SvgContainer } from "../Container/SvgContainer";
import lottie from "lottie-web";
import svg from "../public/svg/43629-analytics.json";

export default function Home() {
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
        <title>logo | Home</title>
        <meta name="keywords" content="Home" />
      </Head>
      <MainContainer>
        <SPageHeader>Logo</SPageHeader>
        <SvgContainer>
          <div className="container" ref={container}></div>
        </SvgContainer>
        <SPageParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl
          felis, dignissim at luctus id, mollis non massa. Nunc sollicitudin
          bibendum dolor nec mattis. Integer ut euismod metus. Aliquam turpis
          purus, venenatis quis porta ac, efficitur et nisi. Nullam convallis
          nisl at diam semper, vel vehicula magna ultrices. Vestibulum dapibus
          arcu non sem semper suscipit. Aenean nec aliquet felis. Cras pharetra
          sem gravida dictum gravida. Vivamus a mauris quam. Aenean volutpat sem
          nisi, a vulputate metus vulputate id. Duis vel nunc eu lorem tristique
          sagittis nec vitae tellus. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Curabitur
          viverra nulla vitae tempor pulvinar. Quisque vel nunc vitae turpis
          porttitor luctus. Nunc sit amet urna sed purus viverra efficitur.
        </SPageParagraph>
      </MainContainer>
    </>
  );
}
