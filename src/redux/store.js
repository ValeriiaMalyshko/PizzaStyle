import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./slice/slice";
// import counterReducer from "./slice/counterSlice";

const middleware = (getDefaultMiddleware) => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: "root",
  storage,
};
export const store = configureStore({
  reducer: {
    root: persistReducer(persistConfig, cartReducer),
    // counter: counterReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
