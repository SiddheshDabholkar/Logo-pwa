import styled from "styled-components";
import React, { useState } from "react";
import Link from "next/link";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { SCompanyName } from "../../Components/Text";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  backdrop-filter: blur(8px);
  background-color: rgba(178, 60, 253, 0);
  position: fixed;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  color: #000;
  a {
    text-decoration: none;
    padding: 4px;
    color: #000;
  }
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 550px) {
    display: none;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 10%;
  justify-content: flex-start;
  align-items: center;
  float: left;
`;

export default function SHeader() {
  const [state, setState] = useState(false);

  const showDrawer = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  return (
    <>
      <StyledHeader>
        <LeftContainer>
          <Button
            icon={<MenuUnfoldOutlined />}
            type="text"
            onClick={showDrawer}
          ></Button>
          <SCompanyName>Logo</SCompanyName>
        </LeftContainer>
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
          <Link href="/ContactUs">
            <a>ContactUs</a>
          </Link>
        </RightContainer>
      </StyledHeader>

      <Drawer
        title="Logo"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={state}
      >
        <Menu>
          <Menu.Item key="1">
            <Link href="/">
              <a onClick={() => setState(false)}>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link href="/About">
              <a onClick={() => setState(false)}>About</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/Features">
              <a onClick={() => setState(false)}>Features</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/ContactUs">
              <a onClick={() => setState(false)}>ContactUs</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}
