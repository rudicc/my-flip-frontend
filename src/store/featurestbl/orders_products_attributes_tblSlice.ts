//#	ORDERS_PRODUCTS_ATTRIBUTES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ORDERS_PRODUCTS_ATTRIBUTES  } from "../../components/models/orders_products_attributes.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Orders_products_attributesState {	
	  orders_products_attributestbl: ORDERS_PRODUCTS_ATTRIBUTES[];	
	}	
		
	const initialState: Orders_products_attributesState = {	
	  orders_products_attributestbl: [],	
	};	
		
	export const fetchOrders_products_attributestbl = createAsyncThunk(	
	  "orders_products_attributestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/orders_products_attributes/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertOrders_products_attributestbl = createAsyncThunk(	
	  "orders_products_attributestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_products_attributes/create/", {	
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
		
	export const UpdateOrders_products_attributestbl = createAsyncThunk(	
	  "orders_products_attributestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_products_attributes/put/", {	
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
	 	
	export const DeleteOrders_products_attributestbl = createAsyncThunk(	
	  "orders_products_attributestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/orders_products_attributes/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Orders_products_attributestblSlice = createSlice({	
	  name: "orders_products_attributestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchOrders_products_attributestbl.fulfilled, (state, action) => {	
	      state.orders_products_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertOrders_products_attributestbl.fulfilled, (state, action) => {	
	      state.orders_products_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateOrders_products_attributestbl.fulfilled, (state, action) => {	
	      state.orders_products_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteOrders_products_attributestbl.fulfilled, (state, action) => {	
	      state.orders_products_attributestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Orders_products_attributestblSlice.reducer;	
	export const {} = Orders_products_attributestblSlice.actions;