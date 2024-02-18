//#	GRP_KEY
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  GRP_KEY  } from "../../components/models/grp_key.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Grp_keyState {	
	  grp_keytbl: GRP_KEY[];	
	}	
		
	const initialState: Grp_keyState = {	
	  grp_keytbl: [],	
	};	
		
	export const fetchGrp_keytbl = createAsyncThunk(	
	  "grp_keytbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/grp_key/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertGrp_keytbl = createAsyncThunk(	
	  "grp_keytbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/grp_key/create/", {	
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
		
	export const UpdateGrp_keytbl = createAsyncThunk(	
	  "grp_keytbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/grp_key/put/", {	
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
	 	
	export const DeleteGrp_keytbl = createAsyncThunk(	
	  "grp_keytbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/grp_key/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Grp_keytblSlice = createSlice({	
	  name: "grp_keytbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchGrp_keytbl.fulfilled, (state, action) => {	
	      state.grp_keytbl = action.payload;	
	    });	
		
	    builder.addCase(InsertGrp_keytbl.fulfilled, (state, action) => {	
	      state.grp_keytbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateGrp_keytbl.fulfilled, (state, action) => {	
	      state.grp_keytbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteGrp_keytbl.fulfilled, (state, action) => {	
	      state.grp_keytbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Grp_keytblSlice.reducer;	
	export const {} = Grp_keytblSlice.actions;