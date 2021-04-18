import styled from "styled-components";
import React, { useState } from "react";
import Link from "next/link";
import { Layout, Menu, Drawer } from "antd";
import { MainContainer } from "../../Container/MainContainer";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #000;
  background-color: rgb(94, 161, 255);
  a {
    text-decoration: none;
    padding: 4px;
    color: #000;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 75%;
  justify-content: center;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  justify-content: center;
  align-items: center;
`;

export default function SHeader() {
  return (
    <>
      <StyledHeader>
        <LeftContainer>Logo</LeftContainer>
        <RightContainer>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/About">
            <a>About</a>
          </Link>
          <Link href="/Features">
            <a>Features</a>
          </Link>
          <Link href="/Documentation">
            <a>Documentation</a>
          </Link>
          <Link href="/Signin">
            <a>Signin</a>
          </Link>
          <Link href="/Signup">
            <a>Signup</a>
          </Link>
        </RightContainer>
      </StyledHeader>
    </>
  );
}
