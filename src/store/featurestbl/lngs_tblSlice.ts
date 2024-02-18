//#	LNGS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  LNGS  } from "../../components/models/lngs.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface LngsState {	
	  lngstbl: LNGS[];	
	}	
		
	const initialState: LngsState = {	
	  lngstbl: [],	
	};	
		
	export const fetchLngstbl = createAsyncThunk(	
	  "lngstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/lngs/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertLngstbl = createAsyncThunk(	
	  "lngstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/lngs/create/", {	
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
		
	export const UpdateLngstbl = createAsyncThunk(	
	  "lngstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/lngs/put/", {	
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
	 	
	export const DeleteLngstbl = createAsyncThunk(	
	  "lngstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/lngs/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const LngstblSlice = createSlice({	
	  name: "lngstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchLngstbl.fulfilled, (state, action) => {	
	      state.lngstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertLngstbl.fulfilled, (state, action) => {	
	      state.lngstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateLngstbl.fulfilled, (state, action) => {	
	      state.lngstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteLngstbl.fulfilled, (state, action) => {	
	      state.lngstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default LngstblSlice.reducer;	
	export const {} = LngstblSlice.actions;