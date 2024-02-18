//#	MANUFACTURERS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  MANUFACTURERS  } from "../../components/models/manufacturers.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface ManufacturersState {	
	  manufacturerstbl: MANUFACTURERS[];	
	}	
		
	const initialState: ManufacturersState = {	
	  manufacturerstbl: [],	
	};	
		
	export const fetchManufacturerstbl = createAsyncThunk(	
	  "manufacturerstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/manufacturers/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertManufacturerstbl = createAsyncThunk(	
	  "manufacturerstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/manufacturers/create/", {	
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
		
	export const UpdateManufacturerstbl = createAsyncThunk(	
	  "manufacturerstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/manufacturers/put/", {	
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
	 	
	export const DeleteManufacturerstbl = createAsyncThunk(	
	  "manufacturerstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/manufacturers/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const ManufacturerstblSlice = createSlice({	
	  name: "manufacturerstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchManufacturerstbl.fulfilled, (state, action) => {	
	      state.manufacturerstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertManufacturerstbl.fulfilled, (state, action) => {	
	      state.manufacturerstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateManufacturerstbl.fulfilled, (state, action) => {	
	      state.manufacturerstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteManufacturerstbl.fulfilled, (state, action) => {	
	      state.manufacturerstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default ManufacturerstblSlice.reducer;	
	export const {} = ManufacturerstblSlice.actions;