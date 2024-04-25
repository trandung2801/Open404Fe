"use client";
import React from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import WhiteButton from "./button";
import { connectWallet } from "@/redux/walletService/walletService";
import { ethers } from "ethers";

export default function ConnectButton() {
  const isConnecting = useAppSelector((s) => s.wallet.isConnecting);
  const isConnected = useAppSelector((s) => s.wallet.isConnected);
  const accountAddress = useAppSelector((s) => s.wallet.accountAddress);
  const dispatch: AppDispatch = useDispatch();

  const handleConnect = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(connectWallet);

    alert("click");
  };

  return (
    // <WhiteButton variant="outlined">
    //   {/* <Stack direction="row" spacing={1}>
    //     <span>{showSortAddress(address)}</span>
    //     <Divider orientation="vertical" flexItem />
    //     <span>{numberFormat(amount)}</span>
    //     <span>ETH</span>
    //   </Stack> */}

    //   {accountAddress }
    // </WhiteButton>
    <button
      disabled={accountAddress !== undefined || isConnecting}
      onClick={(e) => handleConnect(e)}
    >
      {accountAddress && <>{accountAddress}</>}
      {!accountAddress && <>Connect Wallet</>}
    </button>
  );
}
