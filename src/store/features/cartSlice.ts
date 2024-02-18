import { RootState } from "./../store";
import { createAsyncThunk, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const Url ="http://localhost:5000"
// id: 1,
// cover: "../images/product/1-1-1.jpg",
// title: "Floating 2021 iPhone 12 Mockups (PSD)",
// author: "by Blueskytechco in Mockups",
// price: 30.0,
// category: "mockups",
// qty: 0,

 

export interface Product {
  id: number;
  cover: string;
  title: string;
  author: string; 
  price: number;
  category: string;
  qty: number;
  model: string;
  desc: string;
  pview: number;
  lang: number;
  categories_id:number;
  parent_id: number;
  parent_name:string;

}

interface ProductState {
  carts: Product[];
}

const initialState:  ProductState = {
    carts:[],
};


//get basket
export const fetch_customers_basket = createAsyncThunk(
  "customers_basket/fetch",
  async (id: number , thunkAPI) => {
    const response = await fetch(Url + "/customers_basket/" + id, {
      method: "GET",
    });
    //debugger
    const data = response.json();
    return data;
  },
);

export const save_customers_basket = createAsyncThunk(
  "customers_basket/save",
  async (jdata:object , thunkAPI) => {
      const jdatas = JSON.stringify({
         customers_basket_id:jdata.id,
      //   cover:  cover,
      //   title:  title,
      //   author: author,
      //   price:  price,
      //   category: category,
      //   qty: qty,
      })
    const response = await fetch(Url + "/customers_basket/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jdatas,
    });
    //debugger
    const data = response.json();
    return data;
  },
);

export const delete_customers_basket = createAsyncThunk(
  "customers_basket/delete",
  async (id: number, thunkAPI) => {
    const response = await fetch(Url + "/customers_basket/del/" + id, {
      method: "DELETE",
    });
    debugger
    const data = response.json();
    return data;
  },
);


export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Product>) => {
      //debugger
      const itemIndex = state.carts.findIndex((e) => e.items.id === action.payload.items.id)
      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1
      } else {
        const temp = { ...action.payload, qty: 1 }
        return {
          ...state.carts,
          carts: [...state.carts, temp],
        }
      }    
    },
    delCart: (state, action: PayloadAction<number>) => {
      //debugger
      const data = state.carts.filter((el) => el.items.id !== action.payload)
      return {
        ...state,
        carts: data,
      }
    },
    remove_items: (state, action: PayloadAction<Product>) => {
      //debugger
      const itemIndex_desc = state.carts.findIndex((e) => e.items.id === action.payload.items.id)
      if (state.carts[itemIndex_desc].qty >1) {
        const delete_item = (state.carts[itemIndex_desc].qty -= 1)
        console.log([...state.carts, delete_item])
      
        if(delete_item == 0){
          const data = state.carts.filter((el) => el.items.id !== action.payload.items.id)
          return {
            ...state.carts,
            carts: data,
          }
        }  
      } else if (state.carts[itemIndex_desc].qty === 1) {
        const data = state.carts.filter((el) => el.items.id !== action.payload.items.id)
        return {
          ...state,
          carts: data,
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetch_customers_basket.fulfilled, (state, action) => {
      state.carts = action.payload;
    }); 

    builder.addCase(save_customers_basket.fulfilled, (state, action) => {
      state.carts.push(action.payload);
    });

    builder.addCase(delete_customers_basket.fulfilled, (state, action) => {
      state.carts.push(action.payload);
    });

  },
});

export default CartSlice.reducer;
export const { addCart , delCart , remove_items} = CartSlice.actions;

const items = (state: RootState) => state.cart.carts;

 

export const totalItemQtySelector = createSelector([items], (items) => {
  console.log("custom selector runned");
///debugger 
  return items.reduce(
    (total: number, curr: Product) => (total += curr.qty),
    0,
  );
});

 

export const totalItemPriceSelector = createSelector([items], (items) => {
  console.log("custom selector runned");
//debugger
  return items.reduce(
    (total: number, curr: Product) => (
      total =  parseFloat(curr.items.price) * curr.qty + total //curr.items.price
      ),
    0,
  );
});
 