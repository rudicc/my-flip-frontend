//#	CUSTOMERS_BASKET_ATTRIBUTES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CUSTOMERS_BASKET_ATTRIBUTES  } from "../../components/models/customers_basket_attributes.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Customers_basket_attributesState {	
	  customers_basket_attributestbl: CUSTOMERS_BASKET_ATTRIBUTES[];	
	}	
		
	const initialState: Customers_basket_attributesState = {	
	  customers_basket_attributestbl: [],	
	};	
		
	export const fetchCustomers_basket_attributestbl = createAsyncThunk(	
	  "customers_basket_attributestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/customers_basket_attributes/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCustomers_basket_attributestbl = createAsyncThunk(	
	  "customers_basket_attributestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers_basket_attributes/create/", {	
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
		
	export const UpdateCustomers_basket_attributestbl = createAsyncThunk(	
	  "customers_basket_attributestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers_basket_attributes/put/", {	
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
	 	
	export const DeleteCustomers_basket_attributestbl = createAsyncThunk(	
	  "customers_basket_attributestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/customers_basket_attributes/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Customers_basket_attributestblSlice = createSlice({	
	  name: "customers_basket_attributestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCustomers_basket_attributestbl.fulfilled, (state, action) => {	
	      state.customers_basket_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCustomers_basket_attributestbl.fulfilled, (state, action) => {	
	      state.customers_basket_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCustomers_basket_attributestbl.fulfilled, (state, action) => {	
	      state.customers_basket_attributestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCustomers_basket_attributestbl.fulfilled, (state, action) => {	
	      state.customers_basket_attributestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Customers_basket_attributestblSlice.reducer;	
	export const {} = Customers_basket_attributestblSlice.actions;