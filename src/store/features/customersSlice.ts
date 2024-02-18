import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UrlServer } from "../../components/services";
import { CUSTOMERS } from "../../components/models/customers.model";
const Url = UrlServer

  
interface CustomersState {
  customers: CUSTOMERS[];
}

const initialState: CustomersState = {
  customers: [],
};

export const fetchAllCustomers = createAsyncThunk(
  "customers/fetch",
  async (thunkAPI) => {
    const response = await fetch(Url + "/customers/getall", {
      method: "GET",
    });
    debugger
    const data = response.json();
    return data;
  },
);

export const fetchCustomersById = createAsyncThunk(
  "customers/fetchbyId",
  async (id:number , thunkAPI) => {
    const response = await fetch(Url + "/customers/" + id , {
      method: "GET",
    });
    debugger
    const data = response.json();
    return data;
  },
);

// export const savePerson = createAsyncThunk(
//   "customers/save",
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
//   "customers/delete",
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
  name: "customers",
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
    builder.addCase(fetchAllCustomers.fulfilled, (state, action) => {
      state.customers = action.payload;
    });
    builder.addCase(fetchCustomersById.fulfilled, (state, action) => {
      state.customers = action.payload;
    });

    // builder.addCase(savePerson.fulfilled, (state, action) => {
    //   state.persons.push(action.payload);
    // });
  },
});

export default menutabSlice.reducer;
export const {} = menutabSlice.actions;

