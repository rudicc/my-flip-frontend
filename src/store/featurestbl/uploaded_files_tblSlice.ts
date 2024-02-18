//#	UPLOADED_FILES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  UPLOADED_FILES  } from "../../components/models/uploaded_files.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Uploaded_filesState {	
	  uploaded_filestbl: UPLOADED_FILES[];	
	}	
		
	const initialState: Uploaded_filesState = {	
	  uploaded_filestbl: [],	
	};	
		
	export const fetchUploaded_filestbl = createAsyncThunk(	
	  "uploaded_filestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/uploaded_files/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertUploaded_filestbl = createAsyncThunk(	
	  "uploaded_filestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/uploaded_files/create/", {	
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
		
	export const UpdateUploaded_filestbl = createAsyncThunk(	
	  "uploaded_filestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/uploaded_files/put/", {	
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
	 	
	export const DeleteUploaded_filestbl = createAsyncThunk(	
	  "uploaded_filestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/uploaded_files/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Uploaded_filestblSlice = createSlice({	
	  name: "uploaded_filestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchUploaded_filestbl.fulfilled, (state, action) => {	
	      state.uploaded_filestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertUploaded_filestbl.fulfilled, (state, action) => {	
	      state.uploaded_filestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateUploaded_filestbl.fulfilled, (state, action) => {	
	      state.uploaded_filestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteUploaded_filestbl.fulfilled, (state, action) => {	
	      state.uploaded_filestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Uploaded_filestblSlice.reducer;	
	export const {} = Uploaded_filestblSlice.actions;