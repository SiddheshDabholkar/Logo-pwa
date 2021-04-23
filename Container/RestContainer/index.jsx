import styled from "styled-components";

export const RestContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 4%;
`;
