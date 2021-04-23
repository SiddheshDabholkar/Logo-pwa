import React from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";
import { SPageHeader, SPageParagraph } from "../Components/Text";
import { RestContainer } from "../Container/RestContainer";
import AboutCard from "../Components/Card/AboutCard";
import {
  cardData1,
  cardData2,
  cardData3,
} from "../Components/Card/AboutCard/data";

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
        <RestContainer>
          <AboutCard {...cardData1} />
          <AboutCard {...cardData2} />
          <AboutCard {...cardData3} />
        </RestContainer>
      </MainContainer>
    </>
  );
}
