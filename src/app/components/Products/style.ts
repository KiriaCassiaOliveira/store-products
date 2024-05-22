import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1326px;
  margin: 50px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const Product = styled.div`
  width: calc(25% - 20px);
  margin-bottom: 20px;
  border: none;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 425px) {
    width: 100%;
  }

  img {
    width: 62px;
    height: 86px;
  }
  p {
    width: 99%;
    margin: 5px;
    font-size: 13px;
    height: 55px;
    @media (max-width: 768px) {
      height: 100px;
    }
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  text-align: center;
`;

export const ProductItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  flex-direction: column;
  width: 100%;
  h3 {
    font-size: 15px;
  }
  strong {
    color: #665635;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
  }
`;

export const Buy = styled.div`
  display: flex;
  background-color: #4d6a3c;
  align-items: center;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;

  svg {
    color: #fff;
    margin-left: 25px;
  }
`;
export const BuyButton = styled.button`
  width: 70%;
  border: none;
  color: #fff;
  padding: 5px;
  height: 50px;
  background-color: #4d6a3c;
`;
