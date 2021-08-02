/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ConvertLPToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConvertLPToken__factory>;
    getContractFactory(
      name: "IPositionReferral",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionReferral__factory>;
    getContractFactory(
      name: "IPositionToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionToken__factory>;
    getContractFactory(
      name: "IPosiV2Migrate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPosiV2Migrate__factory>;
    getContractFactory(
      name: "IPositionReferral",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionReferral__factory>;
    getContractFactory(
      name: "IPositionToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionToken__factory>;
    getContractFactory(
      name: "MockToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockToken__factory>;
    getContractFactory(
      name: "PosiRefund",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PosiRefund__factory>;
    getContractFactory(
      name: "IPosiTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPosiTreasury__factory>;
    getContractFactory(
      name: "PosiStakingManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PosiStakingManager__factory>;
    getContractFactory(
      name: "IPositionTokenV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPositionTokenV1__factory>;
    getContractFactory(
      name: "PosiStakingManagerV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PosiStakingManagerV1__factory>;
    getContractFactory(
      name: "PositionReferral",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PositionReferral__factory>;
    getContractFactory(
      name: "PositionTokenV1",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PositionTokenV1__factory>;
    getContractFactory(
      name: "PositionTokenV2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PositionTokenV2__factory>;
    getContractFactory(
      name: "PosiTreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PosiTreasury__factory>;
    getContractFactory(
      name: "PosiV2Migrate",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PosiV2Migrate__factory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
  }
}
