//#	CUSTOMERS_BASKET
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CUSTOMERS_BASKET  } from "../../components/models/customers_basket.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Customers_basketState {	
	  customers_baskettbl: CUSTOMERS_BASKET[];	
	}	
		
	const initialState: Customers_basketState = {	
	  customers_baskettbl: [],	
	};	
		
	export const fetchCustomers_baskettbl = createAsyncThunk(	
	  "customers_baskettbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/customers_basket/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCustomers_baskettbl = createAsyncThunk(	
	  "customers_baskettbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers_basket/create/", {	
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
		
	export const UpdateCustomers_baskettbl = createAsyncThunk(	
	  "customers_baskettbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers_basket/put/", {	
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
	 	
	export const DeleteCustomers_baskettbl = createAsyncThunk(	
	  "customers_baskettbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/customers_basket/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Customers_baskettblSlice = createSlice({	
	  name: "customers_baskettbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCustomers_baskettbl.fulfilled, (state, action) => {	
	      state.customers_baskettbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCustomers_baskettbl.fulfilled, (state, action) => {	
	      state.customers_baskettbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCustomers_baskettbl.fulfilled, (state, action) => {	
	      state.customers_baskettbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCustomers_baskettbl.fulfilled, (state, action) => {	
	      state.customers_baskettbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Customers_baskettblSlice.reducer;	
	export const {} = Customers_baskettblSlice.actions;