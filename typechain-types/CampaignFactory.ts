/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace CampaignFactory {
  export type DeployedCampaignsStruct = {
    title: PromiseOrValue<string>;
    submissionDate: PromiseOrValue<BigNumberish>;
    link: PromiseOrValue<string>;
  };

  export type DeployedCampaignsStructOutput = [string, BigNumber, string] & {
    title: string;
    submissionDate: BigNumber;
    link: string;
  };
}

export interface CampaignFactoryInterface extends utils.Interface {
  functions: {
    "createCampaign(string,string,uint256)": FunctionFragment;
    "getDeployedCampaigns()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createCampaign" | "getDeployedCampaigns"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createCampaign",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDeployedCampaigns",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createCampaign",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDeployedCampaigns",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CampaignFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CampaignFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createCampaign(
      title: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDeployedCampaigns(
      overrides?: CallOverrides
    ): Promise<[CampaignFactory.DeployedCampaignsStructOutput[]]>;
  };

  createCampaign(
    title: PromiseOrValue<string>,
    description: PromiseOrValue<string>,
    minimum: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDeployedCampaigns(
    overrides?: CallOverrides
  ): Promise<CampaignFactory.DeployedCampaignsStructOutput[]>;

  callStatic: {
    createCampaign(
      title: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDeployedCampaigns(
      overrides?: CallOverrides
    ): Promise<CampaignFactory.DeployedCampaignsStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    createCampaign(
      title: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDeployedCampaigns(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createCampaign(
      title: PromiseOrValue<string>,
      description: PromiseOrValue<string>,
      minimum: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDeployedCampaigns(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
