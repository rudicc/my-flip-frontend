//#	CURRENCIES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CURRENCIES  } from "../../components/models/currencies.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface CurrenciesState {	
	  currenciestbl: CURRENCIES[];	
	}	
		
	const initialState: CurrenciesState = {	
	  currenciestbl: [],	
	};	
		
	export const fetchCurrenciestbl = createAsyncThunk(	
	  "currenciestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/currencies/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCurrenciestbl = createAsyncThunk(	
	  "currenciestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/currencies/create/", {	
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
		
	export const UpdateCurrenciestbl = createAsyncThunk(	
	  "currenciestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/currencies/put/", {	
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
	 	
	export const DeleteCurrenciestbl = createAsyncThunk(	
	  "currenciestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/currencies/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const CurrenciestblSlice = createSlice({	
	  name: "currenciestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCurrenciestbl.fulfilled, (state, action) => {	
	      state.currenciestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCurrenciestbl.fulfilled, (state, action) => {	
	      state.currenciestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCurrenciestbl.fulfilled, (state, action) => {	
	      state.currenciestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCurrenciestbl.fulfilled, (state, action) => {	
	      state.currenciestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default CurrenciestblSlice.reducer;	
	export const {} = CurrenciestblSlice.actions;