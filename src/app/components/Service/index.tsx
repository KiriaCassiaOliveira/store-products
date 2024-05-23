import api from "./axios";

export const GetProducts = async (page: number, rows: number, sortBy: string, orderBy: string) => {
  try {
    const response = await api.get("/products", {
      params: {
        page,
        rows,
        sortBy,
        orderBy,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
