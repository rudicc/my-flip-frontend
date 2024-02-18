import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../components/product/Product";
//import { products } from "../../components/assets/data/data";
const Url ="http://localhost:5000"

export interface Product {
  id: number;
  cover: string;
  category: string;
  title: string;
  model: string;
  price: number;
  qty: number;
  author: string;
  description: string;
  pview: number;
  lang_id: number;

}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (thunkAPI) => {
    const response = await fetch(Url + "/products/getshp", {
      method: "GET",
    });
    //debugger
    const data = response.json();
    return data;
  },
);



export const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // addPerson:  (state, action: PayloadAction<{ name: string }>) => {
    //   debugger
    //   state.products.push({
    //     id: state.persons.length,
    //     name: action.payload.name,
    //     name2: action.payload.name,
    //     id2: state.persons.length,
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    // builder.addCase(savePerson.fulfilled, (state, action) => {
    //   state.persons.push(action.payload);
    // });
  },
});

export default ProductsSlice.reducer;
export const {} = ProductsSlice.actions;

