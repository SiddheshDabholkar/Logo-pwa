import React from "react";
import { MainContainer } from "../Container/MainContainer";
import { SPageHeader } from "../Components/Text";
import Head from "next/head";

export default function Features() {
  return (
    <>
      <Head>
        <title>logo | Features</title>
        <meta name="keywords" content="Features" />
      </Head>
      <MainContainer>
        <SPageHeader>Features</SPageHeader>
      </MainContainer>
    </>
  );
}
