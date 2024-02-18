//#	A
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  A  } from "../../components/models/a.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface AState {	
	  atbl: A[];	
	}	
		
	const initialState: AState = {	
	  atbl: [],	
	};	
		
	export const fetchAtbl = createAsyncThunk(	
	  "atbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/a/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertAtbl = createAsyncThunk(	
	  "atbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/a/create/", {	
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
		
	export const UpdateAtbl = createAsyncThunk(	
	  "atbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/a/put/", {	
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
	 	
	export const DeleteAtbl = createAsyncThunk(	
	  "atbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/a/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const AtblSlice = createSlice({	
	  name: "atbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchAtbl.fulfilled, (state, action) => {	
	      state.atbl = action.payload;	
	    });	
		
	    builder.addCase(InsertAtbl.fulfilled, (state, action) => {	
	      state.atbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateAtbl.fulfilled, (state, action) => {	
	      state.atbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteAtbl.fulfilled, (state, action) => {	
	      state.atbl = action.payload;	
	    });	
	  },	
	});	
		
	export default AtblSlice.reducer;	
	export const {} = AtblSlice.actions;