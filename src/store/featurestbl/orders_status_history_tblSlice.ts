//#	ORDERS_STATUS_HISTORY
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ORDERS_STATUS_HISTORY  } from "../../components/models/orders_status_history.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Orders_status_historyState {	
	  orders_status_historytbl: ORDERS_STATUS_HISTORY[];	
	}	
		
	const initialState: Orders_status_historyState = {	
	  orders_status_historytbl: [],	
	};	
		
	export const fetchOrders_status_historytbl = createAsyncThunk(	
	  "orders_status_historytbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/orders_status_history/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertOrders_status_historytbl = createAsyncThunk(	
	  "orders_status_historytbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_status_history/create/", {	
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
		
	export const UpdateOrders_status_historytbl = createAsyncThunk(	
	  "orders_status_historytbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders_status_history/put/", {	
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
	 	
	export const DeleteOrders_status_historytbl = createAsyncThunk(	
	  "orders_status_historytbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/orders_status_history/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Orders_status_historytblSlice = createSlice({	
	  name: "orders_status_historytbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchOrders_status_historytbl.fulfilled, (state, action) => {	
	      state.orders_status_historytbl = action.payload;	
	    });	
		
	    builder.addCase(InsertOrders_status_historytbl.fulfilled, (state, action) => {	
	      state.orders_status_historytbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateOrders_status_historytbl.fulfilled, (state, action) => {	
	      state.orders_status_historytbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteOrders_status_historytbl.fulfilled, (state, action) => {	
	      state.orders_status_historytbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Orders_status_historytblSlice.reducer;	
	export const {} = Orders_status_historytblSlice.actions;