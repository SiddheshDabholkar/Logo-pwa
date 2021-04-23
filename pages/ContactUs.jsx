import React from "react";
import Head from "next/head";
import styled from "styled-components";
import ContactUsCard from "../Components/Card/ContactUsCard";
import { SPageHeader } from "../Components/Text";
import { MainContainer } from "../Container/MainContainer";

const CardContainer = styled.div`
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>logo | ContactUs</title>
        <meta name="keywords" content="ContactUs" />
      </Head>

      <MainContainer>
        <SPageHeader>ContactUs</SPageHeader>
        <CardContainer>
          <ContactUsCard />
        </CardContainer>
      </MainContainer>
    </>
  );
}
