import React from "react";
import Head from "next/head";
import { MainContainer } from "../Container/MainContainer";

export default function About() {
  return (
    <>
      <Head>
        <title>logo | About</title>
        <meta name="keywords" content="About" />
      </Head>
      <MainContainer>
        <h1>About</h1>
      </MainContainer>
    </>
  );
}
