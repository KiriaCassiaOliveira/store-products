import axios from "axios";

export const GetProducts = async (page: any, rows: any, sortBy: any, orderBy: any) => {
  try {
    const response = await axios.get(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
