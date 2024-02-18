//#	CUSTOMERS_INFO
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CUSTOMERS_INFO  } from "../../components/models/customers_info.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Customers_infoState {	
	  customers_infotbl: CUSTOMERS_INFO[];	
	}	
		
	const initialState: Customers_infoState = {	
	  customers_infotbl: [],	
	};	
		
	export const fetchCustomers_infotbl = createAsyncThunk(	
	  "customers_infotbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/customers_info/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCustomers_infotbl = createAsyncThunk(	
	  "customers_infotbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers_info/create/", {	
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
		
	export const UpdateCustomers_infotbl = createAsyncThunk(	
	  "customers_infotbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers_info/put/", {	
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
	 	
	export const DeleteCustomers_infotbl = createAsyncThunk(	
	  "customers_infotbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/customers_info/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Customers_infotblSlice = createSlice({	
	  name: "customers_infotbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCustomers_infotbl.fulfilled, (state, action) => {	
	      state.customers_infotbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCustomers_infotbl.fulfilled, (state, action) => {	
	      state.customers_infotbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCustomers_infotbl.fulfilled, (state, action) => {	
	      state.customers_infotbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCustomers_infotbl.fulfilled, (state, action) => {	
	      state.customers_infotbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Customers_infotblSlice.reducer;	
	export const {} = Customers_infotblSlice.actions;