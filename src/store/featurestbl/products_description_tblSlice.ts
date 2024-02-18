//#	PRODUCTS_DESCRIPTION
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_DESCRIPTION  } from "../../components/models/products_description.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_descriptionState {	
	  products_descriptiontbl: PRODUCTS_DESCRIPTION[];	
	}	
		
	const initialState: Products_descriptionState = {	
	  products_descriptiontbl: [],	
	};	
		
	export const fetchProducts_descriptiontbl = createAsyncThunk(	
	  "products_descriptiontbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_description/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_descriptiontbl = createAsyncThunk(	
	  "products_descriptiontbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_description/create/", {	
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
		
	export const UpdateProducts_descriptiontbl = createAsyncThunk(	
	  "products_descriptiontbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_description/put/", {	
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
	 	
	export const DeleteProducts_descriptiontbl = createAsyncThunk(	
	  "products_descriptiontbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_description/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_descriptiontblSlice = createSlice({	
	  name: "products_descriptiontbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_descriptiontbl.fulfilled, (state, action) => {	
	      state.products_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_descriptiontbl.fulfilled, (state, action) => {	
	      state.products_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_descriptiontbl.fulfilled, (state, action) => {	
	      state.products_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_descriptiontbl.fulfilled, (state, action) => {	
	      state.products_descriptiontbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_descriptiontblSlice.reducer;	
	export const {} = Products_descriptiontblSlice.actions;