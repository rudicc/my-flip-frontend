//#	ADMINISTRATORS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ADMINISTRATORS  } from "../../components/models/administrators.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface AdministratorsState {	
	  administratorstbl: ADMINISTRATORS[];	
	}	
		
	const initialState: AdministratorsState = {	
	  administratorstbl: [],	
	};	
		
	export const fetchAdministratorstbl = createAsyncThunk(	
	  "administratorstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/administrators/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertAdministratorstbl = createAsyncThunk(	
	  "administratorstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/administrators/create/", {	
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
		
	export const UpdateAdministratorstbl = createAsyncThunk(	
	  "administratorstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/administrators/put/", {	
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
	 	
	export const DeleteAdministratorstbl = createAsyncThunk(	
	  "administratorstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/administrators/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const AdministratorstblSlice = createSlice({	
	  name: "administratorstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchAdministratorstbl.fulfilled, (state, action) => {	
	      state.administratorstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertAdministratorstbl.fulfilled, (state, action) => {	
	      state.administratorstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateAdministratorstbl.fulfilled, (state, action) => {	
	      state.administratorstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteAdministratorstbl.fulfilled, (state, action) => {	
	      state.administratorstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default AdministratorstblSlice.reducer;	
	export const {} = AdministratorstblSlice.actions;