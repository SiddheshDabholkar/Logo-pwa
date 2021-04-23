import React from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";
import { SPageHeader, SPageParagraph } from "../Components/Text";
import { RestContainer } from "../Container/RestContainer";

export default function About() {
  return (
    <>
      <Head>
        <title>logo | About</title>
        <meta name="keywords" content="About" />
      </Head>
      <MainContainer>
        <SPageHeader>About</SPageHeader>
        <SPageParagraph>
          Lorem ipsum, dolor sit amet consectetur adipis
        </SPageParagraph>
        <RestContainer></RestContainer>
      </MainContainer>
    </>
  );
}
