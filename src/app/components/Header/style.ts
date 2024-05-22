import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  color: #b29d6e;
  align-items: center;
  @media (max-width: 768px) {
    background-color: aquamarine;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #b29d6e;
  /* margin: 0 5%; */
  max-width: 1326px;
  width: 50%;
  margin-left: 7%
`;
