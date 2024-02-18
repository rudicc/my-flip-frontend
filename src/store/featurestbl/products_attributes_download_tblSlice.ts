//#	PRODUCTS_ATTRIBUTES_DOWNLOAD
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_ATTRIBUTES_DOWNLOAD  } from "../../components/models/products_attributes_download.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_attributes_downloadState {	
	  products_attributes_downloadtbl: PRODUCTS_ATTRIBUTES_DOWNLOAD[];	
	}	
		
	const initialState: Products_attributes_downloadState = {	
	  products_attributes_downloadtbl: [],	
	};	
		
	export const fetchProducts_attributes_downloadtbl = createAsyncThunk(	
	  "products_attributes_downloadtbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_attributes_download/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_attributes_downloadtbl = createAsyncThunk(	
	  "products_attributes_downloadtbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_attributes_download/create/", {	
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
		
	export const UpdateProducts_attributes_downloadtbl = createAsyncThunk(	
	  "products_attributes_downloadtbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_attributes_download/put/", {	
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
	 	
	export const DeleteProducts_attributes_downloadtbl = createAsyncThunk(	
	  "products_attributes_downloadtbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_attributes_download/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_attributes_downloadtblSlice = createSlice({	
	  name: "products_attributes_downloadtbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_attributes_downloadtbl.fulfilled, (state, action) => {	
	      state.products_attributes_downloadtbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_attributes_downloadtbl.fulfilled, (state, action) => {	
	      state.products_attributes_downloadtbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_attributes_downloadtbl.fulfilled, (state, action) => {	
	      state.products_attributes_downloadtbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_attributes_downloadtbl.fulfilled, (state, action) => {	
	      state.products_attributes_downloadtbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_attributes_downloadtblSlice.reducer;	
	export const {} = Products_attributes_downloadtblSlice.actions;