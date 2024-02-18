//#	LANGUAGES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  LANGUAGES  } from "../../components/models/languages.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface LanguagesState {	
	  languagestbl: LANGUAGES[];	
	}	
		
	const initialState: LanguagesState = {	
	  languagestbl: [],	
	};	
		
	export const fetchLanguagestbl = createAsyncThunk(	
	  "languagestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/languages/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertLanguagestbl = createAsyncThunk(	
	  "languagestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/languages/create/", {	
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
		
	export const UpdateLanguagestbl = createAsyncThunk(	
	  "languagestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/languages/put/", {	
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
	 	
	export const DeleteLanguagestbl = createAsyncThunk(	
	  "languagestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/languages/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const LanguagestblSlice = createSlice({	
	  name: "languagestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchLanguagestbl.fulfilled, (state, action) => {	
	      state.languagestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertLanguagestbl.fulfilled, (state, action) => {	
	      state.languagestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateLanguagestbl.fulfilled, (state, action) => {	
	      state.languagestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteLanguagestbl.fulfilled, (state, action) => {	
	      state.languagestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default LanguagestblSlice.reducer;	
	export const {} = LanguagestblSlice.actions;