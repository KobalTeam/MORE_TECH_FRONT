import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import host from "@redux/constants";

export type Product = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export const createProduct = createAsyncThunk(
  "products/createProduct",
  async (data: Product) => {
    const response = await fetch(`${host}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    const answer = await response.json();

    return answer;
  },
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id: number) => {
    const response = await fetch(`${host}/marketplace/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const answer = await response.json();

    return answer;
  },
);

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (id: number) => {
    const response = await fetch(`${host}/marketplace`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const answer = await response.json();

    return answer;
  },
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (id: number) => {
    const response = await fetch(`${host}/marketplace/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const answer = await response.json();

    return answer;
  },
);

export const deleteProduct = createAsyncThunk(
  "products/delteProducts",
  async (id: number) => {
    const response = await fetch(`${host}/marketplace/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    const answer = await response.json();

    return answer;
  },
);

export const productSlice = createSlice({
  name: "products",
  initialState: {} as Product,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state = action.payload;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state = action.payload;
    });
  },
});

export default productSlice.reducer;
