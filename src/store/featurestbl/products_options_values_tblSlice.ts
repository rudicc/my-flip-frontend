//#	PRODUCTS_OPTIONS_VALUES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_OPTIONS_VALUES  } from "../../components/models/products_options_values.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_options_valuesState {	
	  products_options_valuestbl: PRODUCTS_OPTIONS_VALUES[];	
	}	
		
	const initialState: Products_options_valuesState = {	
	  products_options_valuestbl: [],	
	};	
		
	export const fetchProducts_options_valuestbl = createAsyncThunk(	
	  "products_options_valuestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_options_values/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_options_valuestbl = createAsyncThunk(	
	  "products_options_valuestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_options_values/create/", {	
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
		
	export const UpdateProducts_options_valuestbl = createAsyncThunk(	
	  "products_options_valuestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_options_values/put/", {	
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
	 	
	export const DeleteProducts_options_valuestbl = createAsyncThunk(	
	  "products_options_valuestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_options_values/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_options_valuestblSlice = createSlice({	
	  name: "products_options_valuestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_options_valuestbl.fulfilled, (state, action) => {	
	      state.products_options_valuestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_options_valuestbl.fulfilled, (state, action) => {	
	      state.products_options_valuestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_options_valuestbl.fulfilled, (state, action) => {	
	      state.products_options_valuestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_options_valuestbl.fulfilled, (state, action) => {	
	      state.products_options_valuestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_options_valuestblSlice.reducer;	
	export const {} = Products_options_valuestblSlice.actions;