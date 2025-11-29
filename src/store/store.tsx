import { configureStore } from "@reduxjs/toolkit";
import { salesApi } from "./sales/salesApi";
import { booksApi } from "./books/booksApi";
// ...

export const store = configureStore({
  reducer: {
    [salesApi.reducerPath]: salesApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(salesApi.middleware)
      .concat(booksApi.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
