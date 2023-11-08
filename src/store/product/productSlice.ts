import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface IProduct {
  image: string;
  price: number;
  product_name: string;
  product_description: string;
}

export interface ProductState {
  selected_product: IProduct | undefined;
}

const initialState: ProductState = {
  selected_product: undefined,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<IProduct | undefined>) => {
      state.selected_product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {selectProduct} = productSlice.actions;

export default productSlice.reducer;
