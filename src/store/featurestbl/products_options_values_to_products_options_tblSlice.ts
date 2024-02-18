//#	PRODUCTS_OPTIONS_VALUES_TO_PRODUCTS_OPTIONS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_OPTIONS_VALUES_TO_PRODUCTS_OPTIONS  } from "../../components/models/products_options_values_to_products_options.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_options_values_to_products_optionsState {	
	  products_options_values_to_products_optionstbl: PRODUCTS_OPTIONS_VALUES_TO_PRODUCTS_OPTIONS[];	
	}	
		
	const initialState: Products_options_values_to_products_optionsState = {	
	  products_options_values_to_products_optionstbl: [],	
	};	
		
	export const fetchProducts_options_values_to_products_optionstbl = createAsyncThunk(	
	  "products_options_values_to_products_optionstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_options_values_to_products_options/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_options_values_to_products_optionstbl = createAsyncThunk(	
	  "products_options_values_to_products_optionstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_options_values_to_products_options/create/", {	
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
		
	export const UpdateProducts_options_values_to_products_optionstbl = createAsyncThunk(	
	  "products_options_values_to_products_optionstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_options_values_to_products_options/put/", {	
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
	 	
	export const DeleteProducts_options_values_to_products_optionstbl = createAsyncThunk(	
	  "products_options_values_to_products_optionstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_options_values_to_products_options/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_options_values_to_products_optionstblSlice = createSlice({	
	  name: "products_options_values_to_products_optionstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_options_values_to_products_optionstbl.fulfilled, (state, action) => {	
	      state.products_options_values_to_products_optionstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_options_values_to_products_optionstbl.fulfilled, (state, action) => {	
	      state.products_options_values_to_products_optionstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_options_values_to_products_optionstbl.fulfilled, (state, action) => {	
	      state.products_options_values_to_products_optionstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_options_values_to_products_optionstbl.fulfilled, (state, action) => {	
	      state.products_options_values_to_products_optionstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_options_values_to_products_optionstblSlice.reducer;	
	export const {} = Products_options_values_to_products_optionstblSlice.actions;