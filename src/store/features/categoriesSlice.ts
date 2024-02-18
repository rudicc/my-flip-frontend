import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UrlServer } from "../../components/services";
import { CATEGORIES } from "../../components/models/categories.model";
const Url = UrlServer

//`menu_id`, `menu_col_code`, `menu_col_name_en`, `menu_col_name_th`, `menu_group_id`, `menu_sort`, `menu_active`, `menu_auth`
 

interface CategoriesState {
  categories: CATEGORIES[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetch",
  async (thunkAPI) => {
    const response = await fetch(Url + "/categories/getall", {
      method: "GET",
    });
    debugger
    const data = response.json();
    return data;
  },
);



// export const savePerson = createAsyncThunk(
//   "menu_tabs/save",
//   async (name: string, thunkAPI) => {
//     debugger
//     const jdata = JSON.stringify({
//       id:0,
//       name:name,
//       name2:"",
//       id2:0,
//     })
//     const response = await fetch(Url + "/a/create/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: jdata,
//     });
  
//     const data = await response.json();
//     return  data;
//   },
// );

// export const deletePerson = createAsyncThunk(
//   "menu_tabs/delete",
//   async (id: number, thunkAPI) => {
//     debugger
 
//     const response = await fetch(Url + "/a/del/" + id, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
    
//     const data = await response.json();
//     return data;
//   },
// );

export const menutabSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default menutabSlice.reducer;
export const {} = menutabSlice.actions;

