import { ConnectWallet, useAddress, useMetamask, useSignatureDrop, useNetwork, useNetworkMismatch, useMintNFT, useMetadata, MediaRenderer} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Web3Button,  } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const Home: NextPage = () => {
  const contractAddress = "0x2d86989df08293Bc928E09EBC70edB8C081dd2C0";
  const { contract } = useContract(contractAddress);
  const address = useAddress();
  const { data: metadata, isLoading: isLoadingMetadata } = useMetadata(contract);
  

  return (
    <div className={styles.container}>
      <ConnectWallet />
      <Web3Button
      contractAddress="0x2d86989df08293Bc928E09EBC70edB8C081dd2C0"
      action={(contract) => {
        contract.call("mint", [1])}
      }
    >
      mint
    </Web3Button>
    </div>
  );
};

export default Home