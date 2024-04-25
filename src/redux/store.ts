"use client";
import { configureStore } from "@reduxjs/toolkit";
import walletRe
import { TypedUseSelectorHook, useSelector } from "react-redux";
// import { Wallet } from "ethers";

export const store = configureStore({
  reducer: {
    // wallet: walletSlice,
    [walletSlice.name]: walletSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
