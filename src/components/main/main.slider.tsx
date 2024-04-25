"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Box } from "@mui/material";
import Button from "@mui/material/Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import NFTCard from "../nftCard/nftCard";
import { INftItem, IPackage } from "@/_types_";
import { packages } from "@/constants";
import { useRouter } from "next/navigation";

interface IProps {
  title: String;
}

const MainSlider = (props: IProps) => {
  const { title } = props;
  const [nft, setNft] = React.useState<INftItem>();
  const [nfts, setNfts] = React.useState<INftItem[]>([]);
  const router = useRouter();

  const handleClick = () => {
    // router.push(`nft/${id}`);
    console.log("click");
  };

  const NextArrow = (props: any) => {
    return (
      <Button
        variant="contained"
        color="inherit"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          right: "0%",
          top: "50%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
          border: "10%",
        }}
      >
        <ChevronRightIcon />
      </Button>
    );
  };

  const PrevArrow = (props: any) => {
    return (
      <Button
        variant="contained"
        color="inherit"
        onClick={props.onClick}
        sx={{
          position: "absolute",
          top: "50%",
          zIndex: 2,
          minWidth: 30,
          width: 35,
        }}
      >
        <ChevronLeftIcon />
      </Button>
    );
  };
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Box
      sx={{
        margin: "0 20px",
        ".card": {
          padding: "0 10px",
        },

        h2: {
          padding: "20px",
        },
      }}
    >
      <h2>{title}</h2>
      <Slider {...settings}>
        {packages.map((nft, index) => (
          <NFTCard item={nft} key={index} index={index} />
        ))}
      </Slider>
    </Box>
  );
};

export default MainSlider;
