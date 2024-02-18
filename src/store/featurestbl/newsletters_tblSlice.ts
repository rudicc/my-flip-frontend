//#	NEWSLETTERS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  NEWSLETTERS  } from "../../components/models/newsletters.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface NewslettersState {	
	  newsletterstbl: NEWSLETTERS[];	
	}	
		
	const initialState: NewslettersState = {	
	  newsletterstbl: [],	
	};	
		
	export const fetchNewsletterstbl = createAsyncThunk(	
	  "newsletterstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/newsletters/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertNewsletterstbl = createAsyncThunk(	
	  "newsletterstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/newsletters/create/", {	
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
		
	export const UpdateNewsletterstbl = createAsyncThunk(	
	  "newsletterstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/newsletters/put/", {	
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
	 	
	export const DeleteNewsletterstbl = createAsyncThunk(	
	  "newsletterstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/newsletters/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const NewsletterstblSlice = createSlice({	
	  name: "newsletterstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchNewsletterstbl.fulfilled, (state, action) => {	
	      state.newsletterstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertNewsletterstbl.fulfilled, (state, action) => {	
	      state.newsletterstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateNewsletterstbl.fulfilled, (state, action) => {	
	      state.newsletterstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteNewsletterstbl.fulfilled, (state, action) => {	
	      state.newsletterstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default NewsletterstblSlice.reducer;	
	export const {} = NewsletterstblSlice.actions;