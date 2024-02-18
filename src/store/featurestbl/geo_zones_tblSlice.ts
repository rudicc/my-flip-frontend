//#	GEO_ZONES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  GEO_ZONES  } from "../../components/models/geo_zones.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Geo_zonesState {	
	  geo_zonestbl: GEO_ZONES[];	
	}	
		
	const initialState: Geo_zonesState = {	
	  geo_zonestbl: [],	
	};	
		
	export const fetchGeo_zonestbl = createAsyncThunk(	
	  "geo_zonestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/geo_zones/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertGeo_zonestbl = createAsyncThunk(	
	  "geo_zonestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/geo_zones/create/", {	
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
		
	export const UpdateGeo_zonestbl = createAsyncThunk(	
	  "geo_zonestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/geo_zones/put/", {	
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
	 	
	export const DeleteGeo_zonestbl = createAsyncThunk(	
	  "geo_zonestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/geo_zones/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Geo_zonestblSlice = createSlice({	
	  name: "geo_zonestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchGeo_zonestbl.fulfilled, (state, action) => {	
	      state.geo_zonestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertGeo_zonestbl.fulfilled, (state, action) => {	
	      state.geo_zonestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateGeo_zonestbl.fulfilled, (state, action) => {	
	      state.geo_zonestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteGeo_zonestbl.fulfilled, (state, action) => {	
	      state.geo_zonestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Geo_zonestblSlice.reducer;	
	export const {} = Geo_zonestblSlice.actions;