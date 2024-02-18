//#	COUNTER_HISTORY
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  COUNTER_HISTORY  } from "../../components/models/counter_history.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Counter_historyState {	
	  counter_historytbl: COUNTER_HISTORY[];	
	}	
		
	const initialState: Counter_historyState = {	
	  counter_historytbl: [],	
	};	
		
	export const fetchCounter_historytbl = createAsyncThunk(	
	  "counter_historytbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/counter_history/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCounter_historytbl = createAsyncThunk(	
	  "counter_historytbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/counter_history/create/", {	
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
		
	export const UpdateCounter_historytbl = createAsyncThunk(	
	  "counter_historytbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/counter_history/put/", {	
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
	 	
	export const DeleteCounter_historytbl = createAsyncThunk(	
	  "counter_historytbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/counter_history/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Counter_historytblSlice = createSlice({	
	  name: "counter_historytbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCounter_historytbl.fulfilled, (state, action) => {	
	      state.counter_historytbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCounter_historytbl.fulfilled, (state, action) => {	
	      state.counter_historytbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCounter_historytbl.fulfilled, (state, action) => {	
	      state.counter_historytbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCounter_historytbl.fulfilled, (state, action) => {	
	      state.counter_historytbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Counter_historytblSlice.reducer;	
	export const {} = Counter_historytblSlice.actions;