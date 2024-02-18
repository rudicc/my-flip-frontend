//#	PRODUCTS_ATTRIBUTES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_ATTRIBUTES  } from "../../components/models/products_attributes.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_attributesState {	
	  products_attributestbl: PRODUCTS_ATTRIBUTES[];	
	}	
		
	const initialState: Products_attributesState = {	
	  products_attributestbl: [],	
	};	
		
	export const fetchProducts_attributestbl = createAsyncThunk(	
	  "products_attributestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_attributes/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_attributestbl = createAsyncThunk(	
	  "products_attributestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_attributes/create/", {	
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
		
	export const UpdateProducts_attributestbl = createAsyncThunk(	
	  "products_attributestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_attributes/put/", {	
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
	 	
	export const DeleteProducts_attributestbl = createAsyncThunk(	
	  "products_attributestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_attributes/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_attributestblSlice = createSlice({	
	  name: "products_attributestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_attributestbl.fulfilled, (state, action) => {	
	      state.products_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_attributestbl.fulfilled, (state, action) => {	
	      state.products_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_attributestbl.fulfilled, (state, action) => {	
	      state.products_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_attributestbl.fulfilled, (state, action) => {	
	      state.products_attributestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_attributestblSlice.reducer;	
	export const {} = Products_attributestblSlice.actions;