//#	ORDERS_PRODUCTS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ORDERS_PRODUCTS  } from "../../components/models/orders_products.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Orders_productsState {	
	  orders_productstbl: ORDERS_PRODUCTS[];	
	}	
		
	const initialState: Orders_productsState = {	
	  orders_productstbl: [],	
	};	
		
	export const fetchOrders_productstbl = createAsyncThunk(	
	  "orders_productstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/orders_products/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertOrders_productstbl = createAsyncThunk(	
	  "orders_productstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_products/create/", {	
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
		
	export const UpdateOrders_productstbl = createAsyncThunk(	
	  "orders_productstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_products/put/", {	
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
	 	
	export const DeleteOrders_productstbl = createAsyncThunk(	
	  "orders_productstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/orders_products/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Orders_productstblSlice = createSlice({	
	  name: "orders_productstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchOrders_productstbl.fulfilled, (state, action) => {	
	      state.orders_productstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertOrders_productstbl.fulfilled, (state, action) => {	
	      state.orders_productstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateOrders_productstbl.fulfilled, (state, action) => {	
	      state.orders_productstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteOrders_productstbl.fulfilled, (state, action) => {	
	      state.orders_productstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Orders_productstblSlice.reducer;	
	export const {} = Orders_productstblSlice.actions;