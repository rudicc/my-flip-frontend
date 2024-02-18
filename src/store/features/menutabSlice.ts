import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UrlServer } from "../../components/services";
const Url = UrlServer

//`menu_id`, `menu_col_code`, `menu_col_name_en`, `menu_col_name_th`, `menu_group_id`, `menu_sort`, `menu_active`, `menu_auth`

export interface Menutab {
  menu_id: number;
  menu_col_code: string;
  menu_col_name_en: string;
  menu_col_name_th: string;
  menu_group_id: number;
  menu_sort: number;
  menu_active: number;
  menu_auth: number; 
}

interface MenutabState {
  menu_tabs: Menutab[];
}

const initialState: MenutabState = {
  menu_tabs: [],
};

export const fetchMenutab = createAsyncThunk(
  "menu_tabs/fetch",
  async (thunkAPI) => {
    const response = await fetch(Url + "/menutab/getall", {
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
  name: "menu_tabs",
  initialState,
  reducers: {
    // addPerson:  (state, action: PayloadAction<{ name: string }>) => {
    //   debugger
    //   state.products.push({
    //     id: state.persons.length,
    //     name: action.payload.name,
    //     name2: action.payload.name,
    //     id2: state.persons.length,
    //   });
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenutab.fulfilled, (state, action) => {
      state.menu_tabs = action.payload;
    });

    // builder.addCase(savePerson.fulfilled, (state, action) => {
    //   state.persons.push(action.payload);
    // });
  },
});

export default menutabSlice.reducer;
export const {} = menutabSlice.actions;

