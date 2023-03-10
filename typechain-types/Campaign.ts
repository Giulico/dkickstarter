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
  PayableOverrides,
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

export interface CampaignInterface extends utils.Interface {
  functions: {
    "approveRequest(uint256)": FunctionFragment;
    "contribute()": FunctionFragment;
    "createRequest(string,uint256,address)": FunctionFragment;
    "description()": FunctionFragment;
    "finalizeRequest(uint256)": FunctionFragment;
    "funders(address)": FunctionFragment;
    "fundersCount()": FunctionFragment;
    "manager()": FunctionFragment;
    "minimumContribution()": FunctionFragment;
    "requestCount()": FunctionFragment;
    "requests(uint256)": FunctionFragment;
    "submissionDate()": FunctionFragment;
    "title()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "approveRequest"
      | "contribute"
      | "createRequest"
      | "description"
      | "finalizeRequest"
      | "funders"
      | "fundersCount"
      | "manager"
      | "minimumContribution"
      | "requestCount"
      | "requests"
      | "submissionDate"
      | "title"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "approveRequest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "contribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createRequest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeRequest",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "funders",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fundersCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "minimumContribution",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requests",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "submissionDate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "title", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "approveRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "contribute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "funders", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundersCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minimumContribution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submissionDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "title", data: BytesLike): Result;

  events: {};
}

export interface Campaign extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CampaignInterface;

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
    approveRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contribute(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createRequest(
      _description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    description(overrides?: CallOverrides): Promise<[string]>;

    finalizeRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    funders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    fundersCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    minimumContribution(overrides?: CallOverrides): Promise<[BigNumber]>;

    requestCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        description: string;
        value: BigNumber;
        recepient: string;
        isComplete: boolean;
        approvalCount: BigNumber;
      }
    >;

    submissionDate(overrides?: CallOverrides): Promise<[BigNumber]>;

    title(overrides?: CallOverrides): Promise<[string]>;
  };

  approveRequest(
    requestIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contribute(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createRequest(
    _description: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    recepient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  description(overrides?: CallOverrides): Promise<string>;

  finalizeRequest(
    requestIndex: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  funders(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  fundersCount(overrides?: CallOverrides): Promise<BigNumber>;

  manager(overrides?: CallOverrides): Promise<string>;

  minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

  requestCount(overrides?: CallOverrides): Promise<BigNumber>;

  requests(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, string, boolean, BigNumber] & {
      description: string;
      value: BigNumber;
      recepient: string;
      isComplete: boolean;
      approvalCount: BigNumber;
    }
  >;

  submissionDate(overrides?: CallOverrides): Promise<BigNumber>;

  title(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    approveRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    contribute(overrides?: CallOverrides): Promise<void>;

    createRequest(
      _description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recepient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    description(overrides?: CallOverrides): Promise<string>;

    finalizeRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    funders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    fundersCount(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<string>;

    minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

    requestCount(overrides?: CallOverrides): Promise<BigNumber>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, string, boolean, BigNumber] & {
        description: string;
        value: BigNumber;
        recepient: string;
        isComplete: boolean;
        approvalCount: BigNumber;
      }
    >;

    submissionDate(overrides?: CallOverrides): Promise<BigNumber>;

    title(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    approveRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contribute(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createRequest(
      _description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    finalizeRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    funders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fundersCount(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    minimumContribution(overrides?: CallOverrides): Promise<BigNumber>;

    requestCount(overrides?: CallOverrides): Promise<BigNumber>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    submissionDate(overrides?: CallOverrides): Promise<BigNumber>;

    title(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    approveRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contribute(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createRequest(
      _description: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      recepient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finalizeRequest(
      requestIndex: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    funders(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fundersCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumContribution(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    requestCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requests(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    submissionDate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    title(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
