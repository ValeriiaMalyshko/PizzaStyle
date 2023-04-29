import { createSlice } from "@reduxjs/toolkit";

const ordersInitialState = [];

const ordersSlice = createSlice({
  name: "orders",
  initialState: ordersInitialState,
  reducers: {
    addOrder: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, id, price, image) {
        return {
          payload: {
            title,
            id,
            price,
            image,
          },
        };
      },
    },
    deleteOrder(state, action) {
      const index = state.findIndex((order) => order.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const order of state) {
        if (order.id === action.payload) {
          order.completed = !order.completed;
          break;
        }
      }
    },
  },
});

export const { addOrder, deleteOrder, toggleCompleted } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
