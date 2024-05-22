import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  max-width: 1326px;
  margin-left: 65%;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const IconCart = styled.div`
  /* background-color: #fff; */
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: #665635;
  cursor: pointer;
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
  @media (max-width: 768px) {
    p{
      font-size: 15px;
    }
  }
`;

export const ProductCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #818181;
  margin: 0px;
  padding: 10px;
  background-color: #fff;
  font-size: 14px;
  margin: 15px auto;
  border-top: 0.1rem solid #e1e1e1;
  border-bottom: 0.1rem solid #e1e1e1;
  p {
    width: 20%;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const ProductQnt = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cfcfcf;
  background-color: transparent;
  padding: 5px;
  margin: 9px;
  width: 20%;
  justify-content: space-between;
  cursor: pointer;
  span {
    font-size: 15px;
  }
  p {
    font-size: 20px;
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const FinallyButton = styled.button`
  width: 100%;
  border: none;
  color: #fff;
  padding: 5px;
  height: 50px;
  background-color: #4d6a3c;
  position: relative;
`;

export const ExitButton = styled.button`
  background-color: black;
  font-size: 12px;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
`;
export const ButtonRemove = styled.button`
  background-color: black;
  font-size: 12px;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const TotalFinally = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  position: absolute;
  width: 100%;
  margin: 0px -21px;
  p {
    padding: 5px;
  }
`;
export const Price = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.div`
  width: 20%;
`;
