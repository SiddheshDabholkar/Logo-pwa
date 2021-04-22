import styled from "styled-components";
import React, { useState } from "react";
import Link from "next/link";
import { Layout, Menu, Drawer, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

const StyledHeader = styled(Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  color: #000;
  background-color: #fff;
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
          <span style={{ padding: "10px" }}>Logo</span>
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

      <Drawer
        title="Basic Drawer"
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
            <Link href="/Documentation">
              <a onClick={() => setState(false)}>Documentation</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/Signin">
              <a onClick={() => setState(false)}>Signin</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link href="/Signup">
              <a onClick={() => setState(false)}>Signup</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </>
  );
}
