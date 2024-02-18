import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UrlServer } from "../../components/services";
const Url = UrlServer

interface Categories_selection {
    categories_id?: number;
    categories_name: string;
  }
  
  interface CategoriesSelectState {
    categoriesselection: Categories_selection[];
  }
  
  const initialState: CategoriesSelectState = {
    categoriesselection: [],
  };
  
  export const fetchCategoriesSelection = createAsyncThunk(
    "categoriesselect/fetch",
    async (thunkAPI) => {
      const response = await fetch(Url + "/categories/getselection", {
        method: "GET",
      });
      debugger
      const data = response.json();
      return data;
    },
  );

export const categoriesSelectionSlice = createSlice({
    name: "categoriesselection",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
 
      builder.addCase(fetchCategoriesSelection.fulfilled, (state, action) => {
        state.categoriesselection = action.payload;
      });

    },
  });
  
  export default categoriesSelectionSlice.reducer;
  export const {} = categoriesSelectionSlice.actions;
  