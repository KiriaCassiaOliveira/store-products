import axios from "axios";

export const GetProducts = async (page: number, rows: number, sortBy: string, orderBy: string) => {
  try {
    const response = axios.get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`);
    return (await response).data;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
