//#	CATEGORIES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  CATEGORIES  } from "../../components/models/categories.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface CategoriesState {	
	  categoriestbl: CATEGORIES[];	
	}	
		
	const initialState: CategoriesState = {	
	  categoriestbl: [],	
	};	
		
	export const fetchCategoriestbl = createAsyncThunk(	
	  "categoriestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/categories/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertCategoriestbl = createAsyncThunk(	
	  "categoriestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/categories/create/", {	
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
		
	export const UpdateCategoriestbl = createAsyncThunk(	
	  "categoriestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/categories/put/", {	
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
	 	
	export const DeleteCategoriestbl = createAsyncThunk(	
	  "categoriestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/categories/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const CategoriestblSlice = createSlice({	
	  name: "categoriestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchCategoriestbl.fulfilled, (state, action) => {	
	      state.categoriestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertCategoriestbl.fulfilled, (state, action) => {	
	      state.categoriestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateCategoriestbl.fulfilled, (state, action) => {	
	      state.categoriestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteCategoriestbl.fulfilled, (state, action) => {	
	      state.categoriestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default CategoriestblSlice.reducer;	
	export const {} = CategoriestblSlice.actions;