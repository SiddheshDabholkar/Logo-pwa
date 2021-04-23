import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding-top: 65px;

  background-color: #8ec5fc;
  background-image: linear-gradient(
    180deg,
    #8ec5fc 0%,
    #e0c3fc 49%,
    #ffffff 100%
  );
`;
