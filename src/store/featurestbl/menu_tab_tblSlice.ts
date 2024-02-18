//#	MENU_TAB
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  MENU_TAB  } from "../../components/models/menu_tab.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Menu_tabState {	
	  menu_tabtbl: MENU_TAB[];	
	}	
		
	const initialState: Menu_tabState = {	
	  menu_tabtbl: [],	
	};	
		
	export const fetchMenu_tabtbl = createAsyncThunk(	
	  "menu_tabtbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/menutab/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertMenu_tabtbl = createAsyncThunk(	
	  "menu_tabtbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/menu_tab/create/", {	
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
		
	export const UpdateMenu_tabtbl = createAsyncThunk(	
	  "menu_tabtbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/menu_tab/put/", {	
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
	 	
	export const DeleteMenu_tabtbl = createAsyncThunk(	
	  "menu_tabtbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/menu_tab/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Menu_tabtblSlice = createSlice({	
	  name: "menu_tabtbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchMenu_tabtbl.fulfilled, (state, action) => {	
	      state.menu_tabtbl = action.payload;	
	    });	
		
	    builder.addCase(InsertMenu_tabtbl.fulfilled, (state, action) => {	
	      state.menu_tabtbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateMenu_tabtbl.fulfilled, (state, action) => {	
	      state.menu_tabtbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteMenu_tabtbl.fulfilled, (state, action) => {	
	      state.menu_tabtbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Menu_tabtblSlice.reducer;	
	export const {} = Menu_tabtblSlice.actions;