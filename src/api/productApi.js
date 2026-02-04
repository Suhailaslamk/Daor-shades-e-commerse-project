import api from "./api";

// YOUR backend endpoints
export const getAllProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
export const searchProducts = (params) => api.get("/products/search", { params });
export const filterSortProducts = (params) =>
  api.get("/products/filter-sort", { params });