import AppHeader from "@/components/header/app.header";
import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";


export default async function Page() {
  return (
    <Container>
      <MainSlider title={"Best NFT"}/>
    </Container>
  );
}
