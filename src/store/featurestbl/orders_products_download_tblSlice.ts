//#	ORDERS_PRODUCTS_DOWNLOAD
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ORDERS_PRODUCTS_DOWNLOAD  } from "../../components/models/orders_products_download.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Orders_products_downloadState {	
	  orders_products_downloadtbl: ORDERS_PRODUCTS_DOWNLOAD[];	
	}	
		
	const initialState: Orders_products_downloadState = {	
	  orders_products_downloadtbl: [],	
	};	
		
	export const fetchOrders_products_downloadtbl = createAsyncThunk(	
	  "orders_products_downloadtbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/orders_products_download/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertOrders_products_downloadtbl = createAsyncThunk(	
	  "orders_products_downloadtbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_products_download/create/", {	
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
		
	export const UpdateOrders_products_downloadtbl = createAsyncThunk(	
	  "orders_products_downloadtbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_products_download/put/", {	
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
	 	
	export const DeleteOrders_products_downloadtbl = createAsyncThunk(	
	  "orders_products_downloadtbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/orders_products_download/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Orders_products_downloadtblSlice = createSlice({	
	  name: "orders_products_downloadtbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchOrders_products_downloadtbl.fulfilled, (state, action) => {	
	      state.orders_products_downloadtbl = action.payload;	
	    });	
		
	    builder.addCase(InsertOrders_products_downloadtbl.fulfilled, (state, action) => {	
	      state.orders_products_downloadtbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateOrders_products_downloadtbl.fulfilled, (state, action) => {	
	      state.orders_products_downloadtbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteOrders_products_downloadtbl.fulfilled, (state, action) => {	
	      state.orders_products_downloadtbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Orders_products_downloadtblSlice.reducer;	
	export const {} = Orders_products_downloadtblSlice.actions;