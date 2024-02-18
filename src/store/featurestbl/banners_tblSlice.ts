//#	BANNERS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  BANNERS  } from "../../components/models/banners.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface BannersState {	
	  bannerstbl: BANNERS[];	
	}	
		
	const initialState: BannersState = {	
	  bannerstbl: [],	
	};	
		
	export const fetchBannerstbl = createAsyncThunk(	
	  "bannerstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/banners/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertBannerstbl = createAsyncThunk(	
	  "bannerstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/banners/create/", {	
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
		
	export const UpdateBannerstbl = createAsyncThunk(	
	  "bannerstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/banners/put/", {	
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
	 	
	export const DeleteBannerstbl = createAsyncThunk(	
	  "bannerstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/banners/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const BannerstblSlice = createSlice({	
	  name: "bannerstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchBannerstbl.fulfilled, (state, action) => {	
	      state.bannerstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertBannerstbl.fulfilled, (state, action) => {	
	      state.bannerstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateBannerstbl.fulfilled, (state, action) => {	
	      state.bannerstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteBannerstbl.fulfilled, (state, action) => {	
	      state.bannerstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default BannerstblSlice.reducer;	
	export const {} = BannerstblSlice.actions;