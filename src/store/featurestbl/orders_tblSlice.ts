//#	ORDERS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ORDERS  } from "../../components/models/orders.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface OrdersState {	
	  orderstbl: ORDERS[];	
	}	
		
	const initialState: OrdersState = {	
	  orderstbl: [],	
	};	
		
	export const fetchOrderstbl = createAsyncThunk(	
	  "orderstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/orders/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertOrderstbl = createAsyncThunk(	
	  "orderstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders/create/", {	
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
		
	export const UpdateOrderstbl = createAsyncThunk(	
	  "orderstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/orders/put/", {	
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
	 	
	export const DeleteOrderstbl = createAsyncThunk(	
	  "orderstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/orders/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const OrderstblSlice = createSlice({	
	  name: "orderstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchOrderstbl.fulfilled, (state, action) => {	
	      state.orderstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertOrderstbl.fulfilled, (state, action) => {	
	      state.orderstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateOrderstbl.fulfilled, (state, action) => {	
	      state.orderstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteOrderstbl.fulfilled, (state, action) => {	
	      state.orderstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default OrderstblSlice.reducer;	
	export const {} = OrderstblSlice.actions;