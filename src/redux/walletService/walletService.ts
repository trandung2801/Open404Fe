"use client";
import { IWalletInfo } from "@/_types_";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface walletState {
  isConnecting: boolean;
  isConnected: boolean;
  errorConnecting: boolean;

  wallet?: IWalletInfo;
  // web3Provider?: any;
  provider?: BrowserProvider;
  signer?: JsonRpcSigner;
  accountAddress?: string;
  networkId?: number;
  noMetamask: boolean;
}

const initialState = {
  isConnecting: false,
  isConnected: false,
  errorConnecting: false,
  // noMetamask: window.ethereum == undefined,
  noMetamask: false,
} as walletState;

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setProvider: (state, action: PayloadAction<BrowserProvider>) => {
      console.log("payload", action.payload);
      state.provider = action.payload;
      // config.provider
    },
    setWalletInfo: (state, action: PayloadAction<IWalletInfo>) => {
      state.wallet = action.payload;
    },
  },
});

// export const { setWalletInfo, setWeb3Provider } = accountSlice.actions;
// export default accountSlice.reducer;
export const { setWalletInfo, setProvider } = walletSlice.actions;
export default walletSlice.reducer;
