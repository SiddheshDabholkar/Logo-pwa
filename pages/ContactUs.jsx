import React from "react";
import { MainContainer } from "../Container/MainContainer";
import Head from "next/head";
import { SPageHeader } from "../Components/Text";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>logo | ContactUs</title>
        <meta name="keywords" content="ContactUs" />
      </Head>

      <MainContainer>
        <SPageHeader>ContactUs</SPageHeader>
      </MainContainer>
    </>
  );
}
