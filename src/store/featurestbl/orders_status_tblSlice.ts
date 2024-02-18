//#	ORDERS_STATUS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ORDERS_STATUS  } from "../../components/models/orders_status.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Orders_statusState {	
	  orders_statustbl: ORDERS_STATUS[];	
	}	
		
	const initialState: Orders_statusState = {	
	  orders_statustbl: [],	
	};	
		
	export const fetchOrders_statustbl = createAsyncThunk(	
	  "orders_statustbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/orders_status/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertOrders_statustbl = createAsyncThunk(	
	  "orders_statustbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_status/create/", {	
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
		
	export const UpdateOrders_statustbl = createAsyncThunk(	
	  "orders_statustbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_status/put/", {	
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
	 	
	export const DeleteOrders_statustbl = createAsyncThunk(	
	  "orders_statustbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/orders_status/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Orders_statustblSlice = createSlice({	
	  name: "orders_statustbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchOrders_statustbl.fulfilled, (state, action) => {	
	      state.orders_statustbl = action.payload;	
	    });	
		
	    builder.addCase(InsertOrders_statustbl.fulfilled, (state, action) => {	
	      state.orders_statustbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateOrders_statustbl.fulfilled, (state, action) => {	
	      state.orders_statustbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteOrders_statustbl.fulfilled, (state, action) => {	
	      state.orders_statustbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Orders_statustblSlice.reducer;	
	export const {} = Orders_statustblSlice.actions;