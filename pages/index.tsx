import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import { useConnect, useAccount } from 'wagmi'
import { Example } from "../components/Example";

const DAI_TOKEN_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f";

function Home() {

  return (
    <div>
      <Head>
        <title>next-web3-boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Example />
    </div>
  );
}

export default Home;
