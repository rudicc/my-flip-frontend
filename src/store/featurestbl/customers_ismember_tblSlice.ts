//#	CUSTOMERS_ISMEMBER
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import { UrlServer } from "../../components/services";	
	import { CUSTOMERS_ISMEMBER } from "../../components/models/customers_ismember.model";
	const Url = UrlServer	
	 	
	interface CustomersIsState {	
	  customers_ismembertbl: CUSTOMERS_ISMEMBER[];	
	}	
		
	const initialState: CustomersIsState = {	
	  customers_ismembertbl: [],	
	};	
		
	export const fetchCustomers_ismembertbl = createAsyncThunk(	
	  "customers_ismembertbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/cusmember/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
	
	export const fetchCustomers_ismemberbyIdtbl = createAsyncThunk(	
		"customers_ismembertbl/fetchbyId",	
		async (id: number, thunkAPI) => {	
		  const response = await fetch(Url + "/cusmember/" + id, {	
			method: "GET",	
		  });	
		  //debugger	
		  const data = response.json();	
		  return data;	
		},	
	  );	

 
	export const InsertCustomers_ismembertbl = createAsyncThunk(	
	  "customers_ismembertbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/cusmember/create/", {	
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
		
	export const UpdateCustomers_ismembertbl = createAsyncThunk(	
	  "customers_ismembertbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/cusmember/put/", {	
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
	 	
	export const DeleteCustomers_ismembertbl = createAsyncThunk(	
	  "customers_ismembertbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/cusmember/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Customers_ismembertblSlice = createSlice({	
	  name: "customers_ismembertbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCustomers_ismembertbl.fulfilled, (state, action) => {	
	      state.customers_ismembertbl = action.payload;	
	    });	
		
		//id
		builder.addCase(fetchCustomers_ismemberbyIdtbl.fulfilled, (state, action) => {	
			state.customers_ismembertbl = action.payload;	
		});	
 		  		  
	    builder.addCase(InsertCustomers_ismembertbl.fulfilled, (state, action) => {	
	      state.customers_ismembertbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCustomers_ismembertbl.fulfilled, (state, action) => {	
	      state.customers_ismembertbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCustomers_ismembertbl.fulfilled, (state, action) => {	
	      state.customers_ismembertbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Customers_ismembertblSlice.reducer;	
	export const {} = Customers_ismembertblSlice.actions;