//#	PRODUCTS_HOME
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_HOME  } from "../../components/models/products_home.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_homeState {	
	  products_hometbl: PRODUCTS_HOME[];	
	}	
		
	const initialState: Products_homeState = {	
	  products_hometbl: [],	
	};	
		
	export const fetchProducts_hometbl = createAsyncThunk(	
	  "products_hometbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_home/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_hometbl = createAsyncThunk(	
	  "products_hometbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_home/create/", {	
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
		
	export const UpdateProducts_hometbl = createAsyncThunk(	
	  "products_hometbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_home/put/", {	
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
	 	
	export const DeleteProducts_hometbl = createAsyncThunk(	
	  "products_hometbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_home/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_hometblSlice = createSlice({	
	  name: "products_hometbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_hometbl.fulfilled, (state, action) => {	
	      state.products_hometbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_hometbl.fulfilled, (state, action) => {	
	      state.products_hometbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_hometbl.fulfilled, (state, action) => {	
	      state.products_hometbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_hometbl.fulfilled, (state, action) => {	
	      state.products_hometbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_hometblSlice.reducer;	
	export const {} = Products_hometblSlice.actions;