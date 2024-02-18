//#	ORDERS_TOTAL
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ORDERS_TOTAL  } from "../../components/models/orders_total.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Orders_totalState {	
	  orders_totaltbl: ORDERS_TOTAL[];	
	}	
		
	const initialState: Orders_totalState = {	
	  orders_totaltbl: [],	
	};	
		
	export const fetchOrders_totaltbl = createAsyncThunk(	
	  "orders_totaltbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/orders_total/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertOrders_totaltbl = createAsyncThunk(	
	  "orders_totaltbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_total/create/", {	
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
		
	export const UpdateOrders_totaltbl = createAsyncThunk(	
	  "orders_totaltbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_total/put/", {	
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
	 	
	export const DeleteOrders_totaltbl = createAsyncThunk(	
	  "orders_totaltbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/orders_total/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Orders_totaltblSlice = createSlice({	
	  name: "orders_totaltbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchOrders_totaltbl.fulfilled, (state, action) => {	
	      state.orders_totaltbl = action.payload;	
	    });	
		
	    builder.addCase(InsertOrders_totaltbl.fulfilled, (state, action) => {	
	      state.orders_totaltbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateOrders_totaltbl.fulfilled, (state, action) => {	
	      state.orders_totaltbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteOrders_totaltbl.fulfilled, (state, action) => {	
	      state.orders_totaltbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Orders_totaltblSlice.reducer;	
	export const {} = Orders_totaltblSlice.actions;