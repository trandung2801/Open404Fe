"use client";
import React from "react";
import { IPackage, INftItem } from "@/_types_";
import { numberFormat } from "@/utils";
import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

interface IProps {
  item: INftItem;
  // index: number;
  // isTransfer?: boolean;
  // isUnList?: boolean;
  // isList?: boolean;
  // isAuction?: boolean;
  // onAction?: (action: ActionType) => void;
}

export default function NFTCard({
  item,
  // index,
}: // isTransfer,
// isAuction,
// isList,
// isUnList,
// onAction,
IProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`nft/${item.id}`);
  };

  const handleBuyNft = () => {
    alert("Buy NFT");
  };

  return (
    <Box
      onClick={() => handleClick()}
      sx={{
        marginRight: "8px",
        marginLeft: "8px",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: "10px",
        border: "1px solid #ccc",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 15px",

        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.12) 0px 6px 24px",
          background: "white",
          cursor: "pointer",
        },
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          inset: "0px",
          padding: "0px",
          border: "none",
          margin: "auto",
          display: "block",
          width: "100%",
          height: "100%",
          minWidth: "100%",
          maxWidth: "100%",
          minHeight: "100%",
          maxHeight: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />

      <Stack
        direction={"column"}
        spacing={1}
        sx={{
          margin: "12px 12px",
          fontWeight: "600",
        }}
      >
        <span>
          {item.name} #{item.id}
        </span>
        <span>{item.price} ETH</span>
        <Button variant="contained" onClick={() => handleBuyNft()}>
          Buy
        </Button>
      </Stack>
    </Box>
  );
}
