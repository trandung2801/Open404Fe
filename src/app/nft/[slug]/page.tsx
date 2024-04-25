"use client";
import { INftItem } from "@/_types_";
import NFTCard from "@/components/nftCard/nftCard";
import { Box, Container, Grid, Stack, Divider } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { packages } from "@/constants";
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import NotesIcon from '@mui/icons-material/Notes';
import Icon from "@mui/material/Icon";

interface IProps {
  item: INftItem;
  params: { slug: string };
}

const DetailNft = (props: IProps) => {
  const { params } = props;
  // const [nft, setNft] = us

  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12} md={5}>
          <Box>
            <NFTCard item={packages[Number(params.slug)]} />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box>
            <Stack direction={"column"} spacing={1.5}>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    // flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "12px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <NotesIcon
                    fontSize="medium"
                    sx={{ color: "black", marginRight: "12px" }}
                  />
                  <span style={{ fontWeight: "450", fontSize: "1.2rem" }}>
                    Description
                  </span>
                </Box>
                <Divider />
                <p
                  style={{
                    // flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "12px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  {packages[Number(params.slug)].description}
                </p>
              </Box>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "12px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  <BallotOutlinedIcon
                    fontSize="medium"
                    sx={{ color: "black", marginRight: "12px" }}
                  />
                  <span style={{ fontWeight: "450", fontSize: "1.2rem" }}>
                    Detail
                  </span>
                </Box>
                <Divider />
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "12px",
                    marginTop: "8px",
                    marginBottom: "8px",
                  }}
                >
                  {packages[Number(params.slug)].description}
                </p>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailNft;
