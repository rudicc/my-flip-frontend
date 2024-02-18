//#	CUSTOMERS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CUSTOMERS  } from "../../components/models/customers.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface CustomersState {	
	  customerstbl: CUSTOMERS[];	
	}	
		
	const initialState: CustomersState = {	
	  customerstbl: [],	
	};	
		
	export const fetchCustomerstbl = createAsyncThunk(	
	  "customerstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/customers/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
	
	export const fetchCustomersbyIdtbl = createAsyncThunk(	
		"customerstbl/fetchbyId",	
		async (id: number, thunkAPI) => {	
		  const response = await fetch(Url + "/customers/" + id, {	
			method: "GET",	
		  });	
		  //debugger	
		  const data = response.json();	
		  return data;	
		},	
	  );	

	  export const fetchCustomersByJoinAddrtbl = createAsyncThunk(	
		"customerstbl/fetchbyjoinId",	
		async (id: number, thunkAPI) => {	
		  const response = await fetch(Url + "/customers/cusaddr/" + id, {	
			method: "GET",	
		  });	
		  //debugger	
		  const data = response.json();	
		  return data;	
		},	
	  );


	export const InsertCustomerstbl = createAsyncThunk(	
	  "customerstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers/create/", {	
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
		
	export const UpdateCustomerstbl = createAsyncThunk(	
	  "customerstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/customers/put/", {	
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
	 	
	export const DeleteCustomerstbl = createAsyncThunk(	
	  "customerstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/customers/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const CustomerstblSlice = createSlice({	
	  name: "customerstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCustomerstbl.fulfilled, (state, action) => {	
	      state.customerstbl = action.payload;	
	    });	
		
		//id
		builder.addCase(fetchCustomersbyIdtbl.fulfilled, (state, action) => {	
			state.customerstbl = action.payload;	
		});	

		//join    
		builder.addCase(fetchCustomersByJoinAddrtbl.fulfilled, (state, action) => {	
			state.customerstbl = action.payload;	
		});	
		  		  
	    builder.addCase(InsertCustomerstbl.fulfilled, (state, action) => {	
	      state.customerstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCustomerstbl.fulfilled, (state, action) => {	
	      state.customerstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCustomerstbl.fulfilled, (state, action) => {	
	      state.customerstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default CustomerstblSlice.reducer;	
	export const {} = CustomerstblSlice.actions;