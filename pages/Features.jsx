import React from "react";
import { MainContainer } from "../Container/MainContainer";
import { SPageHeader } from "../Components/Text";
import Head from "next/head";
import { RestContainer } from "../Container/RestContainer";
import FeatureCard from "../Components/Card/FeaturesCard";
import {
  FeatureData1,
  FeatureData2,
  FeatureData3,
  FeatureData4,
  FeatureData5,
  FeatureData6,
} from "../Components/Card/FeaturesCard/data";

export default function Features() {
  return (
    <>
      <Head>
        <title>logo | Features</title>
        <meta name="keywords" content="Features" />
      </Head>
      <MainContainer>
        <SPageHeader>Features</SPageHeader>
        <RestContainer row>
          <FeatureCard {...FeatureData1} />
          <FeatureCard {...FeatureData2} />
          <FeatureCard {...FeatureData3} />
          <FeatureCard {...FeatureData4} />
          <FeatureCard {...FeatureData5} />
          <FeatureCard {...FeatureData6} />
        </RestContainer>
      </MainContainer>
    </>
  );
}
