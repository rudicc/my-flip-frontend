//#	CONFIGURATION
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CONFIGURATION  } from "../../components/models/configuration.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface ConfigurationState {	
	  configurationtbl: CONFIGURATION[];	
	}	
		
	const initialState: ConfigurationState = {	
	  configurationtbl: [],	
	};	
		
	export const fetchConfigurationtbl = createAsyncThunk(	
	  "configurationtbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/configuration/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertConfigurationtbl = createAsyncThunk(	
	  "configurationtbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/configuration/create/", {	
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
		
	export const UpdateConfigurationtbl = createAsyncThunk(	
	  "configurationtbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/configuration/put/", {	
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
	 	
	export const DeleteConfigurationtbl = createAsyncThunk(	
	  "configurationtbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/configuration/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const ConfigurationtblSlice = createSlice({	
	  name: "configurationtbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchConfigurationtbl.fulfilled, (state, action) => {	
	      state.configurationtbl = action.payload;	
	    });	
		
	    builder.addCase(InsertConfigurationtbl.fulfilled, (state, action) => {	
	      state.configurationtbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateConfigurationtbl.fulfilled, (state, action) => {	
	      state.configurationtbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteConfigurationtbl.fulfilled, (state, action) => {	
	      state.configurationtbl = action.payload;	
	    });	
	  },	
	});	
		
	export default ConfigurationtblSlice.reducer;	
	export const {} = ConfigurationtblSlice.actions;