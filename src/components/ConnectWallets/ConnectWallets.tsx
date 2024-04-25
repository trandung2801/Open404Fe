"use client";
import * as React from "react";
// import { Button, ButtonProps } from "@chakra-ui/react";
import Button, { ButtonProps } from "@mui/material";
import WhiteButton from "../button/button";
import { lightBlue } from "@mui/material/colors";

interface Iprops extends ButtonProps {}

export default function ConnectWallet({ ...props }: Iprops) {
  return (
    <WhiteButton variant="contained" {...props} sx={{color: lightBlue[500]}}>
      Connect Wallet
    </WhiteButton>
  );
}
