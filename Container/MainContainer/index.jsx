import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
`;
