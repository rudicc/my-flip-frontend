//#	ZONES_TO_GEO_ZONES
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	
	import {  ZONES_TO_GEO_ZONES  } from "../../components/models/zones_to_geo_zones.model";	
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 	
	interface Zones_to_geo_zonesState {	
	  zones_to_geo_zonestbl: ZONES_TO_GEO_ZONES[];	
	}	
		
	const initialState: Zones_to_geo_zonesState = {	
	  zones_to_geo_zonestbl: [],	
	};	
		
	export const fetchZones_to_geo_zonestbl = createAsyncThunk(	
	  "zones_to_geo_zonestbl/fetch",	
	  async (thunkAPI) => {	
	    const response = await fetch(Url + "/zones_to_geo_zones/getall", {	
	      method: "GET",	
	    });	
	    //debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		
	export const InsertZones_to_geo_zonestbl = createAsyncThunk(	
	  "zones_to_geo_zonestbl/save",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/zones_to_geo_zones/create/", {	
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
		
	export const UpdateZones_to_geo_zonestbl = createAsyncThunk(	
	  "zones_to_geo_zonestbl/update",	
	  async (jdata: string, thunkAPI) => {	
	    debugger	
	    const response = await fetch(Url + "/zones_to_geo_zones/put/", {	
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
	 	
	export const DeleteZones_to_geo_zonestbl = createAsyncThunk(	
	  "zones_to_geo_zonestbl/delete",	
	  async (id: number, thunkAPI) => {	
	    debugger	
	 	
	    const response = await fetch(Url + "/zones_to_geo_zones/del/" + id, {	
	      method: "DELETE",	
	      headers: {	
	        "Content-Type": "application/json",	
	      },	
	    });	
	    	
	    const data = await response.json();	
	    return data;	
	  },	
	);	
		
	export const Zones_to_geo_zonestblSlice = createSlice({	
	  name: "zones_to_geo_zonestbl",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchZones_to_geo_zonestbl.fulfilled, (state, action) => {	
	      state.zones_to_geo_zonestbl = action.payload;	
	    });	
		
	    builder.addCase(InsertZones_to_geo_zonestbl.fulfilled, (state, action) => {	
	      state.zones_to_geo_zonestbl = action.payload;	
	    });	
		
	    builder.addCase(UpdateZones_to_geo_zonestbl.fulfilled, (state, action) => {	
	      state.zones_to_geo_zonestbl = action.payload;	
	    });	
		
	    builder.addCase(DeleteZones_to_geo_zonestbl.fulfilled, (state, action) => {	
	      state.zones_to_geo_zonestbl = action.payload;	
	    });	
	  },	
	});	
		
	export default Zones_to_geo_zonestblSlice.reducer;	
	export const {} = Zones_to_geo_zonestblSlice.actions;