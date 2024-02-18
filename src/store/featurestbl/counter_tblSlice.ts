//#	COUNTER
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  COUNTER  } from "../../components/models/counter.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface CounterState {	
	  countertbl: COUNTER[];	
	}	
		
	const initialState: CounterState = {	
	  countertbl: [],	
	};	
		
	export const fetchCountertbl = createAsyncThunk(	
	  "countertbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/counter/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCountertbl = createAsyncThunk(	
	  "countertbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/counter/create/", {	
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
		
	export const UpdateCountertbl = createAsyncThunk(	
	  "countertbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/counter/put/", {	
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
	 	
	export const DeleteCountertbl = createAsyncThunk(	
	  "countertbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/counter/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const CountertblSlice = createSlice({	
	  name: "countertbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCountertbl.fulfilled, (state, action) => {	
	      state.countertbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCountertbl.fulfilled, (state, action) => {	
	      state.countertbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCountertbl.fulfilled, (state, action) => {	
	      state.countertbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCountertbl.fulfilled, (state, action) => {	
	      state.countertbl = action.payload;	
	    });	
	  },	
	});	
		
	export default CountertblSlice.reducer;	
	export const {} = CountertblSlice.actions;