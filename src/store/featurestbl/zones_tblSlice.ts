//#	ZONES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ZONES  } from "../../components/models/zones.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface ZonesState {	
	  zonestbl: ZONES[];	
	}	
		
	const initialState: ZonesState = {	
	  zonestbl: [],	
	};	
		
	export const fetchZonestbl = createAsyncThunk(	
	  "zonestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/zones/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertZonestbl = createAsyncThunk(	
	  "zonestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/zones/create/", {	
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
		
	export const UpdateZonestbl = createAsyncThunk(	
	  "zonestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/zones/put/", {	
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
	 	
	export const DeleteZonestbl = createAsyncThunk(	
	  "zonestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/zones/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const ZonestblSlice = createSlice({	
	  name: "zonestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchZonestbl.fulfilled, (state, action) => {	
	      state.zonestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertZonestbl.fulfilled, (state, action) => {	
	      state.zonestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateZonestbl.fulfilled, (state, action) => {	
	      state.zonestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteZonestbl.fulfilled, (state, action) => {	
	      state.zonestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default ZonestblSlice.reducer;	
	export const {} = ZonestblSlice.actions;