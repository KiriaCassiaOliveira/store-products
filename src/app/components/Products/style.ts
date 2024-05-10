import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1326px;
  margin: 50px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Product = styled.div`
  width: calc(25% - 20px);
  margin-bottom: 20px;
  border: 1px solid red;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  img {
    width: 62px;
    height: 86px;
  }
  p{
    font-size: 10px;
  }
  Button{
    width: 100%;
    margin: 10px auto;
    background-color: #0f52ba;
    color: #fff;
    border: none;
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
    h3{
      font-size: 15px;
    }
  strong{
    background-color: #373737;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 12px;
  }
`;
