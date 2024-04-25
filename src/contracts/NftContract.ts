import { IAuctionInfo, INftItem } from "@/_types_";
import { BigNumberish, ethers } from "ethers";
import { Erc404 } from "./interfaces";
import { getRPC } from "./utils/common";
import { getNFTAbi } from "./utils/getAbis";
import { getNFTAddress } from "./utils/getAddress";

export default class NftContract extends Erc404 {
  constructor(provider?: ethers.BrowserProvider) {
    const rpcProvider = new ethers.JsonRpcProvider(getRPC());
    super(provider || rpcProvider, getNFTAddress(), getNFTAbi());
    if (!provider) {
      this._contract = new ethers.Contract(
        this._contractAddress,
        this._abis,
        rpcProvider
      );
    }
  }

    private _listTokenIds = async (address: string) => {
      const urls: BigNumberish[] = await this._contract.owner(address);
      const ids = await Promise.all(urls.map((id) => this._toNumber(id)));
      return ids;
    };

    getListNFT = async (address: string): Promise<INftItem[]> => {
      const ids = await this._listTokenIds(address);
      return Promise.all(
        ids.map(async (id) => {
          const tokenUrl = await this._contract.tokenURI(id);
          const obj = await (await fetch(`${tokenUrl}.json`)).json();
          const item: INftItem = { ...obj, id };
          return item;
        })
      );
    };

    // getNftInfo = async (nfts: Array<any>) => {
    //   return Promise.all(
    //     nfts.map(async (o: any) => {
    //       const tokenUrl = await this._contract.tokenURI(o.tokenId);
    //       const obj = await (await fetch(`${tokenUrl}.json`)).json();
    //       const item: INftItem = { ...obj, id: o.tokenId, author: o.author, price: o.price };
    //       return item;
    //     })
    //   );
    // };

  //   getNftAuctionInfo = async (nftsAuctions: IAuctionInfo[]) => {
  //     return Promise.all(
  //       nftsAuctions.map(async (o: IAuctionInfo) => {
  //         const tokenUrl = await this._contract.tokenURI(o.tokenId);
  //         const obj = await (await fetch(`${tokenUrl}.json`)).json();
  //         const item: IAuctionInfo = { ...o, ...obj, id: o.tokenId };
  //         return item;
  //       })
  //     );
  //   };
}
