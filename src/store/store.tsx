import { configureStore } from "@reduxjs/toolkit";
import { salesApi } from "./sales/salesApi";
// ...

export const store = configureStore({
  reducer: {
    [salesApi.reducerPath]: salesApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(salesApi.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
