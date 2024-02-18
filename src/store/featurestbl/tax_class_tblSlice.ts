//#	TAX_CLASS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  TAX_CLASS  } from "../../components/models/tax_class.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Tax_classState {	
	  tax_classtbl: TAX_CLASS[];	
	}	
		
	const initialState: Tax_classState = {	
	  tax_classtbl: [],	
	};	
		
	export const fetchTax_classtbl = createAsyncThunk(	
	  "tax_classtbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/tax_class/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertTax_classtbl = createAsyncThunk(	
	  "tax_classtbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/tax_class/create/", {	
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
		
	export const UpdateTax_classtbl = createAsyncThunk(	
	  "tax_classtbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/tax_class/put/", {	
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
	 	
	export const DeleteTax_classtbl = createAsyncThunk(	
	  "tax_classtbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/tax_class/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Tax_classtblSlice = createSlice({	
	  name: "tax_classtbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchTax_classtbl.fulfilled, (state, action) => {	
	      state.tax_classtbl = action.payload;	
	    });	
		
	    builder.addCase(InsertTax_classtbl.fulfilled, (state, action) => {	
	      state.tax_classtbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateTax_classtbl.fulfilled, (state, action) => {	
	      state.tax_classtbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteTax_classtbl.fulfilled, (state, action) => {	
	      state.tax_classtbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Tax_classtblSlice.reducer;	
	export const {} = Tax_classtblSlice.actions;