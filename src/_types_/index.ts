export interface IWalletInfo {
  address: string;
  SepoliaETH: number;
}

export interface IRate {
  usdtRate: number;
  SepoliaETHRate: number;
}

export enum TOKEN {
  SepoliaETH = "SepoliaETH",
  USDT = "USDT",
}

export interface IPackage {
  id: number;
  name?: string;
  description?: string;
  image: string;
  attributes?: {
    trait_type: string;
    value: string | number;
  };
  //Listing
  price?: number;
  author?: string;
}

export interface IMenu {
  name: string;
  url: string;
}

export interface IAttribute {
  trait_type: string;
  value: string | number;
}

export interface INftItem {
  id: number;
  name?: string;
  description?: string;
  image: string;
  attributes?: IAttribute[];
  //Listing
  price?: number;
  author?: string;
}

export enum Clarity {
  "A",
  "B",
  "C",
  "D",
  "E",
  "S",
  "SS",
  "SSS",
}
export type ActionType = "LIST" | "UNLIST" | "TRANSFER" | "AUCTION";

export interface IAuctionInfo extends INftItem {
  auctionId: number;
  auctioneer: string;
  tokenId: number;
  initialPrice: number;
  previousBidder: string;
  lastBid: number;
  lastBidder: string;
  startTime: number;
  endTime: number;
  completed: boolean;
  active: boolean;
}
