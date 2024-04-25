// import { Button, HStack, Image, Text } from "@chakra-ui/react";
import { Stack } from "@mui/material";
import React from "react";
import { numberFormat, showSortAddress } from "@/utils";
import WhiteButton from "../button/button";
import { lightBlue } from "@mui/material/colors";
import Divider from "@mui/material/Divider";

interface Iprops {
  address?: string;
  amount: number;
}

export default function WalletInfo({ address, amount }: Iprops) {
  return (
    <WhiteButton variant="outlined">
      <Stack direction="row" spacing={1}>
        <span>{showSortAddress(address)}</span>
        <Divider orientation="vertical" flexItem />
        <span>{numberFormat(amount)}</span>
        <span>ETH</span>
      </Stack>
    </WhiteButton>
  );
}
