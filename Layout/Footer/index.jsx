import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BackTop } from "antd";
import { Layout } from "antd";
const { Footer } = Layout;
import {
  UpCircleOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  MediumOutlined,
  InstagramOutlined,
  GithubOutlined,
  UsbOutlined,
} from "@ant-design/icons";
import { SCompanyName, SParagraph } from "../../Components/Text";

const StyledFooter = styled(Footer)`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  align-items: center;
  padding: 20px;
  color: #000;
  height: auto;
  background-color: #fff;
`;

const Above = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const Below = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  padding: 10px;
  @media (max-width: 500px) {
    width: 60%;
  }
`;

const HorizontalLine = styled.hr`
  border: 1px solid #0000003d;
  width: 80%;
`;

export default function SFooter() {
  return (
    <>
      <StyledFooter>
        <HorizontalLine />
        <Below>
          <SocialContainer>
            <Link href="https://www.facebook.com">
              <FacebookOutlined />
            </Link>
            <Link href="https://www.twitter.com">
              <TwitterOutlined />
            </Link>
            <Link href="https://www.Linkedin.com">
              <LinkedinOutlined />
            </Link>
            <Link href="https://www.Medium.com">
              <MediumOutlined />
            </Link>
            <Link href="https://www.Instagram.com">
              <InstagramOutlined />
            </Link>
            <Link href="https://www.github.com">
              <GithubOutlined />
            </Link>
          </SocialContainer>
        </Below>
        <Below>
          <UsbOutlined />
          <SParagraph>Copyright © {new Date().getFullYear()} logo</SParagraph>
        </Below>
        <BackTop>
          <UpCircleOutlined style={{ fontSize: "30px" }} />
        </BackTop>
      </StyledFooter>
    </>
  );
}
