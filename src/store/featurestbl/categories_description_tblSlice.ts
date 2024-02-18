//#	CATEGORIES_DESCRIPTION
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CATEGORIES_DESCRIPTION  } from "../../components/models/categories_description.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Categories_descriptionState {	
	  categories_descriptiontbl: CATEGORIES_DESCRIPTION[];	
	}	
		
	const initialState: Categories_descriptionState = {	
	  categories_descriptiontbl: [],	
	};	
		
	export const fetchCategories_descriptiontbl = createAsyncThunk(	
	  "categories_descriptiontbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/categories_description/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCategories_descriptiontbl = createAsyncThunk(	
	  "categories_descriptiontbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/categories_description/create/", {	
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
		
	export const UpdateCategories_descriptiontbl = createAsyncThunk(	
	  "categories_descriptiontbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/categories_description/put/", {	
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
	 	
	export const DeleteCategories_descriptiontbl = createAsyncThunk(	
	  "categories_descriptiontbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/categories_description/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Categories_descriptiontblSlice = createSlice({	
	  name: "categories_descriptiontbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCategories_descriptiontbl.fulfilled, (state, action) => {	
	      state.categories_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCategories_descriptiontbl.fulfilled, (state, action) => {	
	      state.categories_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCategories_descriptiontbl.fulfilled, (state, action) => {	
	      state.categories_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCategories_descriptiontbl.fulfilled, (state, action) => {	
	      state.categories_descriptiontbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Categories_descriptiontblSlice.reducer;	
	export const {} = Categories_descriptiontblSlice.actions;