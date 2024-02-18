import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
const Url ="http://localhost:5000"

export interface Person {
  id: number;
  name: string;
  name2: string;
  id2: number;
}

interface PersonState {
  persons: Person[];
}

const initialState: PersonState = {
  persons: [],
};

export const fetchPerson = createAsyncThunk(
  "person/fetch",
  async (thunkAPI) => {
    const response = await fetch(Url + "/a/getall", {
      method: "GET",
    });
    ////debugger
    const data = response.json();
    return data;
  },
);

export const savePerson = createAsyncThunk(
  "person/save",
  async (name: string, thunkAPI) => {
    //debugger
    const jdata = JSON.stringify({
      id:0,
      name:name,
      name2:"",
      id2:0,
    })
    const response = await fetch(Url + "/a/create/", {
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

export const deletePerson = createAsyncThunk(
  "person/delete",
  async (id: number, thunkAPI) => {
    //debugger
 
    const response = await fetch(Url + "/a/del/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();
    return data;
  },
);

export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPerson:  (state, action: PayloadAction<{ name: string }>) => {
      //debugger
      state.persons.push({
        id: state.persons.length,
        name: action.payload.name,
        name2: action.payload.name,
        id2: state.persons.length,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPerson.fulfilled, (state, action) => {
      state.persons = action.payload;
    });

    builder.addCase(savePerson.fulfilled, (state, action) => {
      state.persons.push(action.payload);
    });
  },
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;

