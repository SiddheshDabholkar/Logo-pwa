import React, { useRef, useEffect } from "react";
import { StyledCard } from "..";
import { SPageHeader, SParagraph } from "../../Text";
import { SvgContainer } from "../../../Container/SvgContainer";
import { RestContainer } from "../../../Container/RestContainer";
import lottie from "lottie-web";
import styled from "styled-components";

const One = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  @media (max-width: 550px) {
    flex-direction: row;
    width: 100%;
  }
`;
const Two = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 550px) {
    width: 100%;
    flex-direction: row;
  }
`;
const Above = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export default function AboutCard({ title, data, svg, reverse }) {
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
          <RestContainer row style={{ flexDirection: `${reverse}` }}>
            <One>
              <SvgContainer>
                <div className="container" ref={container}></div>
              </SvgContainer>
            </One>
            <Two>
              <SParagraph>{data}</SParagraph>
            </Two>
          </RestContainer>
        </StyledCard>
      </Above>
    </>
  );
}
