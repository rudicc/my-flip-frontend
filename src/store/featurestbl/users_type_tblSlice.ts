//#	USERS_TYPE
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  USERS_TYPE  } from "../../components/models/users_type.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Users_typeState {	
	  users_typetbl: USERS_TYPE[];	
	}	
		
	const initialState: Users_typeState = {	
	  users_typetbl: [],	
	};	
		
	export const fetchUsers_typetbl = createAsyncThunk(	
	  "users_typetbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/users_type/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertUsers_typetbl = createAsyncThunk(	
	  "users_typetbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/users_type/create/", {	
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
		
	export const UpdateUsers_typetbl = createAsyncThunk(	
	  "users_typetbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/users_type/put/", {	
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
	 	
	export const DeleteUsers_typetbl = createAsyncThunk(	
	  "users_typetbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/users_type/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Users_typetblSlice = createSlice({	
	  name: "users_typetbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchUsers_typetbl.fulfilled, (state, action) => {	
	      state.users_typetbl = action.payload;	
	    });	
		
	    builder.addCase(InsertUsers_typetbl.fulfilled, (state, action) => {	
	      state.users_typetbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateUsers_typetbl.fulfilled, (state, action) => {	
	      state.users_typetbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteUsers_typetbl.fulfilled, (state, action) => {	
	      state.users_typetbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Users_typetblSlice.reducer;	
	export const {} = Users_typetblSlice.actions;