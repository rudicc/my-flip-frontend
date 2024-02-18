//#	REVIEWS_DESCRIPTION
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  REVIEWS_DESCRIPTION  } from "../../components/models/reviews_description.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Reviews_descriptionState {	
	  reviews_descriptiontbl: REVIEWS_DESCRIPTION[];	
	}	
		
	const initialState: Reviews_descriptionState = {	
	  reviews_descriptiontbl: [],	
	};	
		
	export const fetchReviews_descriptiontbl = createAsyncThunk(	
	  "reviews_descriptiontbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/reviews_description/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertReviews_descriptiontbl = createAsyncThunk(	
	  "reviews_descriptiontbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/reviews_description/create/", {	
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
		
	export const UpdateReviews_descriptiontbl = createAsyncThunk(	
	  "reviews_descriptiontbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/reviews_description/put/", {	
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
	 	
	export const DeleteReviews_descriptiontbl = createAsyncThunk(	
	  "reviews_descriptiontbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/reviews_description/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Reviews_descriptiontblSlice = createSlice({	
	  name: "reviews_descriptiontbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchReviews_descriptiontbl.fulfilled, (state, action) => {	
	      state.reviews_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(InsertReviews_descriptiontbl.fulfilled, (state, action) => {	
	      state.reviews_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateReviews_descriptiontbl.fulfilled, (state, action) => {	
	      state.reviews_descriptiontbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteReviews_descriptiontbl.fulfilled, (state, action) => {	
	      state.reviews_descriptiontbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Reviews_descriptiontblSlice.reducer;	
	export const {} = Reviews_descriptiontblSlice.actions;