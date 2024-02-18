//#	SPECIALS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  SPECIALS  } from "../../components/models/specials.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface SpecialsState {	
	  specialstbl: SPECIALS[];	
	}	
		
	const initialState: SpecialsState = {	
	  specialstbl: [],	
	};	
		
	export const fetchSpecialstbl = createAsyncThunk(	
	  "specialstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/specials/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertSpecialstbl = createAsyncThunk(	
	  "specialstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/specials/create/", {	
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
		
	export const UpdateSpecialstbl = createAsyncThunk(	
	  "specialstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/specials/put/", {	
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
	 	
	export const DeleteSpecialstbl = createAsyncThunk(	
	  "specialstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/specials/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const SpecialstblSlice = createSlice({	
	  name: "specialstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchSpecialstbl.fulfilled, (state, action) => {	
	      state.specialstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertSpecialstbl.fulfilled, (state, action) => {	
	      state.specialstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateSpecialstbl.fulfilled, (state, action) => {	
	      state.specialstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteSpecialstbl.fulfilled, (state, action) => {	
	      state.specialstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default SpecialstblSlice.reducer;	
	export const {} = SpecialstblSlice.actions;