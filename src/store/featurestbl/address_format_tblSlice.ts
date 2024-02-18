//#	ADDRESS_FORMAT
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ADDRESS_FORMAT  } from "../../components/models/address_format.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Address_formatState {	
	  address_formattbl: ADDRESS_FORMAT[];	
	}	
		
	const initialState: Address_formatState = {	
	  address_formattbl: [],	
	};	
		
	export const fetchAddress_formattbl = createAsyncThunk(	
	  "address_formattbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/address_format/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertAddress_formattbl = createAsyncThunk(	
	  "address_formattbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/address_format/create/", {	
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
		
	export const UpdateAddress_formattbl = createAsyncThunk(	
	  "address_formattbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/address_format/put/", {	
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
	 	
	export const DeleteAddress_formattbl = createAsyncThunk(	
	  "address_formattbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/address_format/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Address_formattblSlice = createSlice({	
	  name: "address_formattbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchAddress_formattbl.fulfilled, (state, action) => {	
	      state.address_formattbl = action.payload;	
	    });	
		
	    builder.addCase(InsertAddress_formattbl.fulfilled, (state, action) => {	
	      state.address_formattbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateAddress_formattbl.fulfilled, (state, action) => {	
	      state.address_formattbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteAddress_formattbl.fulfilled, (state, action) => {	
	      state.address_formattbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Address_formattblSlice.reducer;	
	export const {} = Address_formattblSlice.actions;