import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  padding: 20px;
  background-color: rgb(94, 161, 255);
  color: #000;
  height: auto;
`;

export default function SFooter() {
  return (
    <>
      <StyledFooter>
        <h1>lol</h1>
      </StyledFooter>
    </>
  );
}
