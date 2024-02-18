//#	REVIEWS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  REVIEWS  } from "../../components/models/reviews.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface ReviewsState {	
	  reviewstbl: REVIEWS[];	
	}	
		
	const initialState: ReviewsState = {	
	  reviewstbl: [],	
	};	
		
	export const fetchReviewstbl = createAsyncThunk(	
	  "reviewstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/reviews/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertReviewstbl = createAsyncThunk(	
	  "reviewstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/reviews/create/", {	
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
		
	export const UpdateReviewstbl = createAsyncThunk(	
	  "reviewstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/reviews/put/", {	
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
	 	
	export const DeleteReviewstbl = createAsyncThunk(	
	  "reviewstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/reviews/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const ReviewstblSlice = createSlice({	
	  name: "reviewstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchReviewstbl.fulfilled, (state, action) => {	
	      state.reviewstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertReviewstbl.fulfilled, (state, action) => {	
	      state.reviewstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateReviewstbl.fulfilled, (state, action) => {	
	      state.reviewstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteReviewstbl.fulfilled, (state, action) => {	
	      state.reviewstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default ReviewstblSlice.reducer;	
	export const {} = ReviewstblSlice.actions;