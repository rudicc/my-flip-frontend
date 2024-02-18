import { PayloadAction, createSlice } from "@reduxjs/toolkit";
//import { PROGRESS_CHECKOUT_STATE } from "../../components/models/progress_checkout_state.model";

interface ProgressState {
    valuestate: number; //PROGRESS_CHECKOUT_STATE[];
  }
  
const initialState:  ProgressState = {
    valuestate:0,
};

export const ProgressStateSlice = createSlice({
    name: "progressstate",
    initialState,
    reducers: {   
      increment: (state, action: PayloadAction<number>) => {
        //debugger  
        state.valuestate += 1   
  
      },
      decrement: (state, action: PayloadAction<number>) => {
        //debugger
        state.valuestate -= 1
      },
      clearstate: (state, action: PayloadAction<number>) => {
        //debugger
        state.valuestate = 0
      },
 
    },
    extraReducers: () => {},
  });
  
  export default ProgressStateSlice.reducer;
  export const { increment , decrement ,clearstate} = ProgressStateSlice.actions;
