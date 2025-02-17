import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const createProduct = async (product) => {
  return await axios.post(API_URL, product, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

