//#	PRODUCTS_OPTIONS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_OPTIONS  } from "../../components/models/products_options.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_optionsState {	
	  products_optionstbl: PRODUCTS_OPTIONS[];	
	}	
		
	const initialState: Products_optionsState = {	
	  products_optionstbl: [],	
	};	
		
	export const fetchProducts_optionstbl = createAsyncThunk(	
	  "products_optionstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_options/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_optionstbl = createAsyncThunk(	
	  "products_optionstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_options/create/", {	
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
		
	export const UpdateProducts_optionstbl = createAsyncThunk(	
	  "products_optionstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_options/put/", {	
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
	 	
	export const DeleteProducts_optionstbl = createAsyncThunk(	
	  "products_optionstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_options/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_optionstblSlice = createSlice({	
	  name: "products_optionstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_optionstbl.fulfilled, (state, action) => {	
	      state.products_optionstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_optionstbl.fulfilled, (state, action) => {	
	      state.products_optionstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_optionstbl.fulfilled, (state, action) => {	
	      state.products_optionstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_optionstbl.fulfilled, (state, action) => {	
	      state.products_optionstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_optionstblSlice.reducer;	
	export const {} = Products_optionstblSlice.actions;