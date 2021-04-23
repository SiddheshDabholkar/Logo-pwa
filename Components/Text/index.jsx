import styled from "styled-components";

export const SPageHeader = styled.h1`
  color: ${({ light }) => (light ? "#fff" : "#000")};
  font-size: ${({ small }) => (small ? "18px" : "28px")};
  font-weight: bolder;
  text-align: center;
  width: 100%;
`;

export const SPageParagraph = styled.p`
  color: ${({ light }) => (light ? "#fff" : "#000")};
  font-size: 17px;
  font-weight: ${({ bolder }) => (bolder ? "bolder" : "")};
  text-align: center;
  width: 100%;
  font-family: cursive;
  padding: 20px;
`;

export const SParagraph = styled.p`
  color: ${({ light }) => (light ? "#fff" : "#000")};
  font-size: 13px;
  font-weight: ${({ bolder }) => (bolder ? "bolder" : "")};
  text-align: center;
`;

export const SCompanyName = styled.h1`
  color: ${({ light }) => (light ? "#fff" : "#000")};
  font-size: ${({ ifinfooter }) => (ifinfooter ? "28px" : "15px")};
  font-weight: ${({ bolder }) => (bolder ? "bolder" : "")};
  text-align: center;
  padding: 10px;
  padding-bottom: 0px;
  font-family: cursive;
`;
