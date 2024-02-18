//#	PRODUCTS_NOTIFICATIONS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  PRODUCTS_NOTIFICATIONS  } from "../../components/models/products_notifications.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Products_notificationsState {	
	  products_notificationstbl: PRODUCTS_NOTIFICATIONS[];	
	}	
		
	const initialState: Products_notificationsState = {	
	  products_notificationstbl: [],	
	};	
		
	export const fetchProducts_notificationstbl = createAsyncThunk(	
	  "products_notificationstbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/products_notifications/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertProducts_notificationstbl = createAsyncThunk(	
	  "products_notificationstbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_notifications/create/", {	
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
		
	export const UpdateProducts_notificationstbl = createAsyncThunk(	
	  "products_notificationstbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/products_notifications/put/", {	
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
	 	
	export const DeleteProducts_notificationstbl = createAsyncThunk(	
	  "products_notificationstbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/products_notifications/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Products_notificationstblSlice = createSlice({	
	  name: "products_notificationstbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchProducts_notificationstbl.fulfilled, (state, action) => {	
	      state.products_notificationstbl = action.payload;	
	    });	
		
	    builder.addCase(InsertProducts_notificationstbl.fulfilled, (state, action) => {	
	      state.products_notificationstbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateProducts_notificationstbl.fulfilled, (state, action) => {	
	      state.products_notificationstbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteProducts_notificationstbl.fulfilled, (state, action) => {	
	      state.products_notificationstbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Products_notificationstblSlice.reducer;	
	export const {} = Products_notificationstblSlice.actions;