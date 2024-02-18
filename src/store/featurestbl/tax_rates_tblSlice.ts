//#	TAX_RATES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  TAX_RATES  } from "../../components/models/tax_rates.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Tax_ratesState {	
	  tax_ratestbl: TAX_RATES[];	
	}	
		
	const initialState: Tax_ratesState = {	
	  tax_ratestbl: [],	
	};	
		
	export const fetchTax_ratestbl = createAsyncThunk(	
	  "tax_ratestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/tax_rates/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertTax_ratestbl = createAsyncThunk(	
	  "tax_ratestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/tax_rates/create/", {	
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
		
	export const UpdateTax_ratestbl = createAsyncThunk(	
	  "tax_ratestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/tax_rates/put/", {	
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
	 	
	export const DeleteTax_ratestbl = createAsyncThunk(	
	  "tax_ratestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/tax_rates/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Tax_ratestblSlice = createSlice({	
	  name: "tax_ratestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchTax_ratestbl.fulfilled, (state, action) => {	
	      state.tax_ratestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertTax_ratestbl.fulfilled, (state, action) => {	
	      state.tax_ratestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateTax_ratestbl.fulfilled, (state, action) => {	
	      state.tax_ratestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteTax_ratestbl.fulfilled, (state, action) => {	
	      state.tax_ratestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Tax_ratestblSlice.reducer;	
	export const {} = Tax_ratestblSlice.actions;