//#	MANUFACTURERS_INFO
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  MANUFACTURERS_INFO  } from "../../components/models/manufacturers_info.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Manufacturers_infoState {	
	  manufacturers_infotbl: MANUFACTURERS_INFO[];	
	}	
		
	const initialState: Manufacturers_infoState = {	
	  manufacturers_infotbl: [],	
	};	
		
	export const fetchManufacturers_infotbl = createAsyncThunk(	
	  "manufacturers_infotbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/manufacturers_info/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertManufacturers_infotbl = createAsyncThunk(	
	  "manufacturers_infotbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/manufacturers_info/create/", {	
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
		
	export const UpdateManufacturers_infotbl = createAsyncThunk(	
	  "manufacturers_infotbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/manufacturers_info/put/", {	
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
	 	
	export const DeleteManufacturers_infotbl = createAsyncThunk(	
	  "manufacturers_infotbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/manufacturers_info/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Manufacturers_infotblSlice = createSlice({	
	  name: "manufacturers_infotbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchManufacturers_infotbl.fulfilled, (state, action) => {	
	      state.manufacturers_infotbl = action.payload;	
	    });	
		
	    builder.addCase(InsertManufacturers_infotbl.fulfilled, (state, action) => {	
	      state.manufacturers_infotbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateManufacturers_infotbl.fulfilled, (state, action) => {	
	      state.manufacturers_infotbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteManufacturers_infotbl.fulfilled, (state, action) => {	
	      state.manufacturers_infotbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Manufacturers_infotblSlice.reducer;	
	export const {} = Manufacturers_infotblSlice.actions;