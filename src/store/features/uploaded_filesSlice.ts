import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UrlServer } from "../../components/services";
import { UPLOADED_FILES } from "../../components/models/uploaded_files.models";
const Url = UrlServer

 

interface Uploaded_fileState {
  uploadedfiles: UPLOADED_FILES[];
}

const initialState: Uploaded_fileState = {
  uploadedfiles: [],
};

export const fetchUploaded_files = createAsyncThunk(
  "uploaded_files/fetch",
  async (thunkAPI) => {
    const response = await fetch(Url + "/uploaded_file/imgproduct", {
      method: "GET",
    });
    //debugger
    const data = response.json();
    return data;
  },
);

// export const savePerson = createAsyncThunk(
//   "uploaded_files/save",
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
//   "uploaded_files/delete",
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

export const UploadedFilesSlice = createSlice({
  name: "uploaded_files",
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
    builder.addCase(fetchUploaded_files.fulfilled, (state, action) => {
      state.uploadedfiles = action.payload;
    });

    // builder.addCase(savePerson.fulfilled, (state, action) => {
    //   state.persons.push(action.payload);
    // });
  },
});

export default UploadedFilesSlice.reducer;
export const {} = UploadedFilesSlice.actions;

