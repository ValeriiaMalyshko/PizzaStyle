import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ordersReducer } from "./orders-Slice";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, ordersReducer);

export default () => {
  let store = configureStore(persistedReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};
