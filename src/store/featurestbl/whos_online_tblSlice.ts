//#	WHOS_ONLINE
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  WHOS_ONLINE  } from "../../components/models/whos_online.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Whos_onlineState {	
	  whos_onlinetbl: WHOS_ONLINE[];	
	}	
		
	const initialState: Whos_onlineState = {	
	  whos_onlinetbl: [],	
	};	
		
	export const fetchWhos_onlinetbl = createAsyncThunk(	
	  "whos_onlinetbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/whos_online/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertWhos_onlinetbl = createAsyncThunk(	
	  "whos_onlinetbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/whos_online/create/", {	
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
		
	export const UpdateWhos_onlinetbl = createAsyncThunk(	
	  "whos_onlinetbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/whos_online/put/", {	
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
	 	
	export const DeleteWhos_onlinetbl = createAsyncThunk(	
	  "whos_onlinetbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/whos_online/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Whos_onlinetblSlice = createSlice({	
	  name: "whos_onlinetbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchWhos_onlinetbl.fulfilled, (state, action) => {	
	      state.whos_onlinetbl = action.payload;	
	    });	
		
	    builder.addCase(InsertWhos_onlinetbl.fulfilled, (state, action) => {	
	      state.whos_onlinetbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateWhos_onlinetbl.fulfilled, (state, action) => {	
	      state.whos_onlinetbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteWhos_onlinetbl.fulfilled, (state, action) => {	
	      state.whos_onlinetbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Whos_onlinetblSlice.reducer;	
	export const {} = Whos_onlinetblSlice.actions;