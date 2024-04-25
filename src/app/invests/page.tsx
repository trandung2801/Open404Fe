"use client";
import { Flex, Heading, SimpleGrid, Spacer } from "@chakra-ui/react";
import React from "react";
import ConnectWallet from "@/components/ConnectWallets/ConnectWallets";
import WalletInfo from "@/components/WalletInfo/WalletInfo";
import { IRate, IWalletInfo, IPackage, TOKEN } from "@/_types_";
import { ethers } from "ethers";
import InvestCard from "@/components/InvestCard/investCard";
import { packages } from "@/constants";

declare var window: any;

export default function InvestView() {
  const [wallet, setWallet] = React.useState<IWalletInfo>();
  const [rate, setRate] = React.useState<IRate>({ bnbRate: 0, usdtRate: 0 });
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [pak, setPak] = React.useState<IPackage>();
//   const [txHash, setTxHash] = React.useState<string>();
//   const { isOpen, onClose, onOpen } = useDisclosure();
  const [browserProvider, setBrowserProvider] =
    React.useState<ethers.BrowserProvider>();

  const onConnectMetamask = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const address = await signer.getAddress();
      const bigBalance = await signer.getNonce(); // ether 6
      const bnbBalance = Number.parseFloat(ethers.formatEther(bigBalance)); //ether 6

      setWallet({ address, bnb: bnbBalance });
      setBrowserProvider(provider);
    }
  };

  const handleBuyIco = async (pk: IPackage) => {

  };

  return (
    <Flex
      w={{ base: "full", lg: "70%" }}
      flexDirection={"column"}
      margin={"50px auto"}
    >
      <Flex>
        <Heading size="lg" fontWeight="bold">
          Blockchain Trainee
        </Heading>
        <Spacer />
        {!wallet && <ConnectWallet onClick={onConnectMetamask} />}
        {wallet && (
          <WalletInfo address={wallet?.address} amount={wallet?.bnb || 0} />
        )}
      </Flex>

      <SimpleGrid columns={{ base: 1, lg: 3 }} mt="50px" spacingY="20px">
        {packages.map((pk, index) => (
          <InvestCard
            pak={pk}
            key={String(index)}
            isBuying={isProcessing && pak?.key === pk.key}
            rate={pk.token === TOKEN.BNB ? rate.bnbRate : rate.usdtRate}
            walletInfo={wallet}
            onBuy={() => handleBuyIco(pk)}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
