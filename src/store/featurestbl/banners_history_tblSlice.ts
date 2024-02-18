//#	BANNERS_HISTORY
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  BANNERS_HISTORY  } from "../../components/models/banners_history.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Banners_historyState {	
	  banners_historytbl: BANNERS_HISTORY[];	
	}	
		
	const initialState: Banners_historyState = {	
	  banners_historytbl: [],	
	};	
		
	export const fetchBanners_historytbl = createAsyncThunk(	
	  "banners_historytbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/banners_history/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertBanners_historytbl = createAsyncThunk(	
	  "banners_historytbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/banners_history/create/", {	
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
		
	export const UpdateBanners_historytbl = createAsyncThunk(	
	  "banners_historytbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/banners_history/put/", {	
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
	 	
	export const DeleteBanners_historytbl = createAsyncThunk(	
	  "banners_historytbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/banners_history/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Banners_historytblSlice = createSlice({	
	  name: "banners_historytbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchBanners_historytbl.fulfilled, (state, action) => {	
	      state.banners_historytbl = action.payload;	
	    });	
		
	    builder.addCase(InsertBanners_historytbl.fulfilled, (state, action) => {	
	      state.banners_historytbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateBanners_historytbl.fulfilled, (state, action) => {	
	      state.banners_historytbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteBanners_historytbl.fulfilled, (state, action) => {	
	      state.banners_historytbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Banners_historytblSlice.reducer;	
	export const {} = Banners_historytblSlice.actions;