//#	SESSIONS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  SESSIONS  } from "../../components/models/sessions.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface SessionsState {	
	  sessionstbl: SESSIONS[];	
	}	
		
	const initialState: SessionsState = {	
	  sessionstbl: [],	
	};	
		
	export const fetchSessionstbl = createAsyncThunk(	
	  "sessionstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/sessions/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertSessionstbl = createAsyncThunk(	
	  "sessionstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/sessions/create/", {	
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
		
	export const UpdateSessionstbl = createAsyncThunk(	
	  "sessionstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/sessions/put/", {	
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
	 	
	export const DeleteSessionstbl = createAsyncThunk(	
	  "sessionstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/sessions/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const SessionstblSlice = createSlice({	
	  name: "sessionstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchSessionstbl.fulfilled, (state, action) => {	
	      state.sessionstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertSessionstbl.fulfilled, (state, action) => {	
	      state.sessionstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateSessionstbl.fulfilled, (state, action) => {	
	      state.sessionstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteSessionstbl.fulfilled, (state, action) => {	
	      state.sessionstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default SessionstblSlice.reducer;	
	export const {} = SessionstblSlice.actions;