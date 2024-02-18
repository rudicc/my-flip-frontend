import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCTS } from "../../components/models/products.model";
import { UrlServer } from "../../components/services";
const Url = UrlServer

interface ProductsState {
  productstbl: PRODUCTS[];
}

const initialState: ProductsState = {
  productstbl: [],
};

export const fetchProductstbl = createAsyncThunk(
  "productstbl/fetch",
  async (thunkAPI) => {
    const response = await fetch(Url + "/products/getall", {
      method: "GET",
    });
    //debugger
    const data = response.json();
    return data;
  },
);

export const fetchProductsbyIdtbl = createAsyncThunk(
  "productsbyIdtbl/fetch",
  async (id:number, thunkAPI) => {
    const response = await fetch(Url + "/products/" + id, {
      method: "GET",
    });
    //debugger
    const data = response.json();
    return data;
  },
);

export const InsertProductstbl = createAsyncThunk(
  "productstbl/save",
  async (jdata: string, thunkAPI) => {
    debugger
    const response = await fetch(Url + "/products/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jdata,
    });
  
    const data = await response.json();
    return  data;
  },
);

export const UpdateProductstbl = createAsyncThunk(
  "productstbl/update",
  async (jdata: string, thunkAPI) => {
    debugger
    const response = await fetch(Url + "/products/put/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: jdata,
    });
  
    const data = await response.json(); 
    return  data.data;
  },
);
 
export const DeleteProductstbl = createAsyncThunk(
  "productstbl/delete",
  async (id: number, thunkAPI) => {
    debugger
 
    const response = await fetch(Url + "/products/del/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();
    return data;
  },
);

export const ProducttblSlice = createSlice({
  name: "productstbl",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductstbl.fulfilled, (state, action) => {
      state.productstbl = action.payload;
    });

    //
    builder.addCase(fetchProductsbyIdtbl.fulfilled, (state, action) => {
      state.productstbl = action.payload;
    });

    builder.addCase(InsertProductstbl.fulfilled, (state, action) => {
      //state.productstbl = action.payload;
    });

    builder.addCase(UpdateProductstbl.fulfilled, (state, action) => {
      debugger
      //state.productstbl = action.payload;
    });

    builder.addCase(DeleteProductstbl.fulfilled, (state, action) => {
      //state.productstbl = action.payload;
    });
  },
});

export default ProducttblSlice.reducer;
export const {} = ProducttblSlice.actions;

