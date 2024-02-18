//#	CONFIGURATION_GROUP
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CONFIGURATION_GROUP  } from "../../components/models/configuration_group.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Configuration_groupState {	
	  configuration_grouptbl: CONFIGURATION_GROUP[];	
	}	
		
	const initialState: Configuration_groupState = {	
	  configuration_grouptbl: [],	
	};	
		
	export const fetchConfiguration_grouptbl = createAsyncThunk(	
	  "configuration_grouptbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/configuration_group/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertConfiguration_grouptbl = createAsyncThunk(	
	  "configuration_grouptbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/configuration_group/create/", {	
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
		
	export const UpdateConfiguration_grouptbl = createAsyncThunk(	
	  "configuration_grouptbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/configuration_group/put/", {	
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
	 	
	export const DeleteConfiguration_grouptbl = createAsyncThunk(	
	  "configuration_grouptbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/configuration_group/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Configuration_grouptblSlice = createSlice({	
	  name: "configuration_grouptbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchConfiguration_grouptbl.fulfilled, (state, action) => {	
	      state.configuration_grouptbl = action.payload;	
	    });	
		
	    builder.addCase(InsertConfiguration_grouptbl.fulfilled, (state, action) => {	
	      state.configuration_grouptbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateConfiguration_grouptbl.fulfilled, (state, action) => {	
	      state.configuration_grouptbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteConfiguration_grouptbl.fulfilled, (state, action) => {	
	      state.configuration_grouptbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Configuration_grouptblSlice.reducer;	
	export const {} = Configuration_grouptblSlice.actions;