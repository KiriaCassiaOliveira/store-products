import styled from "styled-components";

export const Container = styled.div``;

export const IconCart = styled.div`
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 10px;
  svg {
    width: 80px;
    cursor: pointer;
  }
`;
export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 900;
  font-size: 25px;
`;

export const FooterCart = styled.div`
  p {
    position: fixed;
    bottom: 10%;
    font-weight: 900;
  }
`;

export const ProductCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #818181;
  border-radius: 15px;
  margin: 0px;
  padding: 10px;
  background-color: #fff;
  font-size: 14px;
  margin: 15px auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ProductQnt = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cfcfcf;
  background-color: transparent;
  padding: 5px;
  margin: 9px;
  width: 16%;
  justify-content: space-between;
  cursor: pointer;
  span {
    font-size: 15px;
  }
  p {
    font-size: 20px;
  }
`;

export const FinallyButton = styled.button`
  width: 90%;
  border: none;
  color: #fff;
  padding: 5px;
  height: 50px;
  background-color: black;
  position: fixed;
  bottom: 0;
`;

export const QntButton = styled.button`
  /* width: 100%;
  border: none;
  color: #fff;
  padding: 5px;
  height: 50px;
  background-color: black; */
`;
export const ExitButton = styled.button`
  background-color: black;
  font-size: 9px;
  color: #fff;
  border: none;
  padding: 5px;
  border-radius: 15px;
`;
export const ButtonRemove = styled.button`
  background-color: black;
  font-size: 9px;
  color: #fff;
  border: none;
  padding: 5px;
  border-radius: 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
