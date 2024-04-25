import { ethers, InterfaceAbi } from "ethers";
import { TransactionResponse } from "@ethersproject/abstract-provider";
import BaseInterface from "./BaseInterface";

class Erc404 extends BaseInterface {
  constructor(
    provider: ethers.BrowserProvider | ethers.JsonRpcProvider,
    address: string,
    abi: InterfaceAbi
  ) {
    super(provider, address, abi);
  }
  //read contract
  async balanceOf(walletAddress: string): Promise<number> {
    const balance = await this._contract.balanceOf(walletAddress);
    return this._toNumber(balance);
  }

  async dataURI(): Promise<string> {
    return this._contract.dataURI();
  }

  async erc20TotalSupply(): Promise<number> {
    return this._contract.erc20TotalSupply();
  }

  async erc20BalanceOf(walletAddress: string): Promise<number> {
    const balance = await this._contract.erc20BalanceOf(walletAddress);
    return this._toNumber(balance);
  }

  async erc721TotalSupply(): Promise<number> {
    return this._contract.erc721TotalSupply();
  }

  async erc721BalanceOf(walletAddress: string): Promise<number> {
    const balance = await this._contract.erc721BalanceOf(walletAddress);
    return this._toNumber(balance);
  }

  async erc721TransferExempt(walletAddress: string): Promise<boolean> {
    return this._contract.erc721TransferExempt(walletAddress);
  }

  async getERC721QueueLength(): Promise<number> {
    return this._contract.getERC721QueueLength();
  }

  async metaDescription(): Promise<string> {
    return this._contract.metaDescription();
  }

  async minted(): Promise<number> {
    return this._contract.minted();
  }

  async name(): Promise<string> {
    return this._contract.name();
  }

  async owned(walletAddress: string): Promise<Array<number>> {
    return this._contract.owned(walletAddress);
  }

  async owner(): Promise<string> {
    return this._contract.owner();
  }

  async ownerOf(tokenId: number): Promise<string> {
    return this._contract.ownerOf(tokenId);
  }

  async totalSupply(): Promise<number> {
    return this._contract.totalSupply();
  }

  async getApproved(tokenId: string | number): Promise<string> {
    return this._contract.getApproved(tokenId);
  }

  // write contract
  async approve(toAddress: string, tokenId: string | number) {
    return this._contract.approve(toAddress, tokenId);
  }

  async erc20Approve(toAddress: string, amount: number) {
    return this._contract.erc20Approve(toAddress, amount);
  }

  async erc721Approve(toAddress: string, tokenId: string) {
    return this._contract.erc721Approve(toAddress, tokenId);
  }

  async safeTransferFrom(
    fromAddress: string,
    toAddress: string,
    tokenId: string | number
  ): Promise<string> {
    //https://github.com/ethers-io/ethers.js/issues/1160
    const tx: TransactionResponse = await this._contract[
      "safeTransferFrom(address,address,uint256)"
    ](fromAddress, toAddress, tokenId, this._option);
    return this._handleTransactionResponse(tx);
  }

  async erc721TransferFrom(
    fromAddress: string,
    toAddress: string,
    tokenId: string | number
  ): Promise<string> {
    const tx: TransactionResponse = await this._contract.erc721TransferFrom(
      fromAddress,
      toAddress,
      tokenId
    );
    return this._handleTransactionResponse(tx);
  }

  async erc20TransferFrom(
    fromAddress: string,
    toAddress: string,
    tokenId: string | number
  ): Promise<string> {
    const tx: TransactionResponse = await this._contract.erc20TransferFrom(
      fromAddress,
      toAddress,
      tokenId
    );
    return this._handleTransactionResponse(tx);
  }
}

export default Erc404;
