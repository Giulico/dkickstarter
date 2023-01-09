import { ethers } from "ethers";

import CampaignFactory from "../ethereum/build/CampaignFactory.json";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";


import { Button } from "@chakra-ui/react";

export default function CreateCampaign() {
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0x444Eb9cF9b9c59CE0EcaD62742f402341e1678c7",
    abi: CampaignFactory.abi,
    functionName: "createCampaign",
    args: [ethers.utils.parseUnits("0.01")], // minimumContribution
    enabled: true,
  });
  const { data, error, isError, write: createCampaign } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const createContract = () => {
    createCampaign?.();
  };
  
  return (
    <>
      <Button colorScheme="blue" onClick={createContract}>
        {isLoading ? "Creating...." : "Create a campaign"}
      </Button>
      <br />
      {isSuccess && (
        <div>
          Successfully created!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </>
  );
}
