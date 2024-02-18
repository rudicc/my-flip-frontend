//#	BANNERS
	import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";	 
	import { UrlServer } from "../../components/services";	
	const Url = UrlServer	
	 
	// "parent_id": 1,
	// "parent_name": "หนังสือราชกิจจานุเบกษา",
	// "active": 1,
	// "update_date": null,
	// "update_user": null,
	// "categories_id": 4,
	// "categories_image": "subcategory_graphic_cards.gif",
	// "sort_order": 0,
	// "date_added": "2022-07-28T08:19:23.000Z",
	// "last_modified": null,
	// "categories_detail": "ประเภท ก ฉบับกฤษฎีกา ประกาศเกี่ยวกับรัฐธรรมนูญ พระราชบัญญัติ พระราชกำหนด พระราชกฤษฎีกา กฎกระทรวง"

interface TOPBOOK	{
	parent_id:number;
	parent_name:string;
	active:number;
	update_date:string;
	update_user:string;
	categories_id:number;
	categories_image:string;
	categories_detail:string;	
	sort_order:number;
	date_added:string;
	last_modified:string;


}
	interface TopbookState {	
		topbooks: TOPBOOK[];	
	}	
		
	const initialState: TopbookState = {	
		topbooks: [],	
	};	
		
	export const fetchTopbook = createAsyncThunk(	
	  "topbook/fetch",	
	  async (id:number, thunkAPI) => {	
	    const response = await fetch(Url + "/categories/gettopbook/"  + id, {	
	      method: "GET",	
	    });	
	    debugger	
	    const data = response.json();	
	    return data;	
	  },	
	);	
		 	
	export const TopbookSlice = createSlice({	
	  name: "topbook",	
	  initialState,	
	  reducers: {},	
	  extraReducers: (builder) => {	
	    builder.addCase(fetchTopbook.fulfilled, (state, action) => {	
	      state.topbooks = action.payload;	
	    });			 
	  },	
	});	
		
	export default TopbookSlice.reducer;	
	export const {} = TopbookSlice.actions;