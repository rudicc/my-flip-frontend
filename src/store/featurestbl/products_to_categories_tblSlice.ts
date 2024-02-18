//#	PRODUCTS_TO_CATEGORIES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_TO_CATEGORIES  } from "../../components/models/products_to_categories.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_to_categoriesState {	
	  products_to_categoriestbl: PRODUCTS_TO_CATEGORIES[];	
	}	
		
	const initialState: Products_to_categoriesState = {	
	  products_to_categoriestbl: [],	
	};	
		
	export const fetchProducts_to_categoriestbl = createAsyncThunk(	
	  "products_to_categoriestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_to_categories/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_to_categoriestbl = createAsyncThunk(	
	  "products_to_categoriestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_to_categories/create/", {	
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
		
	export const UpdateProducts_to_categoriestbl = createAsyncThunk(	
	  "products_to_categoriestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_to_categories/put/", {	
	      method: "PUT",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	      body: jdata,	
	    });	
	  	
	    const data = await response.json();	
	    return  data;	
	  },	
	);	
	 	
	export const DeleteProducts_to_categoriestbl = createAsyncThunk(	
	  "products_to_categoriestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_to_categories/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_to_categoriestblSlice = createSlice({	
	  name: "products_to_categoriestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_to_categoriestbl.fulfilled, (state, action) => {	
	      state.products_to_categoriestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_to_categoriestbl.fulfilled, (state, action) => {	
	      state.products_to_categoriestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_to_categoriestbl.fulfilled, (state, action) => {	
	      state.products_to_categoriestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_to_categoriestbl.fulfilled, (state, action) => {	
	      state.products_to_categoriestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_to_categoriestblSlice.reducer;	
	export const {} = Products_to_categoriestblSlice.actions;