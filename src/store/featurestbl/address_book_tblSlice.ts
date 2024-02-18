//#	ADDRESS_BOOK
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ADDRESS_BOOK  } from "../../components/models/address_book.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Address_bookState {	
	  address_booktbl: ADDRESS_BOOK[];	
	}	
		
	const initialState: Address_bookState = {	
	  address_booktbl: [],	
	};	
		
	export const fetchAddress_booktbl = createAsyncThunk(	
	  "address_booktbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/address_book/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const fetchAddress_bookbyIdtbl = createAsyncThunk(	
		"address_booktbl/fetchbyid",	
		async (id: number ,thunkAPI) => {	
		  const response = await fetch(Url + "/address_book/customer/" + id, {	
			method: "GET",	
		  });	
		  //debugger	
		  const data = response.json();	
		  return data;	
		},	
	  );	

	export const InsertAddress_booktbl = createAsyncThunk(	
	  "address_booktbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/address_book/create/", {	
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
		
	export const UpdateAddress_booktbl = createAsyncThunk(	
	  "address_booktbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/address_book/put/", {	
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
	 	
	export const DeleteAddress_booktbl = createAsyncThunk(	
	  "address_booktbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/address_book/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Address_booktblSlice = createSlice({	
	  name: "address_booktbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchAddress_booktbl.fulfilled, (state, action) => {	
	      state.address_booktbl = action.payload;	
	    });	
		
		//by customer id
		builder.addCase(fetchAddress_bookbyIdtbl.fulfilled, (state, action) => {	
			state.address_booktbl = action.payload;	
		});	
		
		  
	    builder.addCase(InsertAddress_booktbl.fulfilled, (state, action) => {	
	      state.address_booktbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateAddress_booktbl.fulfilled, (state, action) => {	
	      state.address_booktbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteAddress_booktbl.fulfilled, (state, action) => {	
	      state.address_booktbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Address_booktblSlice.reducer;	
	export const {} = Address_booktblSlice.actions;