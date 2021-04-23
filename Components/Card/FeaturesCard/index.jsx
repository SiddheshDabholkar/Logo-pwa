import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { StyledCard } from "../../../Components/Card/index";
import { RestContainer } from "../../../Container/RestContainer";
import { SvgContainer } from "../../../Container/SvgContainer";
import { SPageHeader, SParagraph } from "../../Text";
import lottie from "lottie-web";

const Above = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 33%;
  flex-wrap: wrap;
  @media (max-width: 769px) {
    width: 50%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export default function FeatureCard({ title, info, svg }) {
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
      <Above>
        <StyledCard>
          <SPageHeader small>{title}</SPageHeader>
          <RestContainer>
            <SvgContainer>
              <div className="container" ref={container}></div>
            </SvgContainer>
            <SParagraph>{info}</SParagraph>
          </RestContainer>
        </StyledCard>
      </Above>
    </>
  );
}
