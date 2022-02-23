// import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
// import getLibrary from "../getLibrary";
// import "@arco-design/web-react/dist/css/arco.css";
// import "../styles/globals.css";

// App use original provider

// function NextWeb3App({ Component, pageProps }: AppProps) {
//   return (
//     <Web3ReactProvider getLibrary={getLibrary}>
//       <Component {...pageProps} />
//     </Web3ReactProvider>
//   );
// }

// export default NextWeb3App;



import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { WalletLinkConnector } from 'wagmi/connectors/walletLink'


// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)
const infuraId = process.env.INFURA_ID || '9aa3d95b3bc440fa88ea12eaa4456161'

// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    new WalletLinkConnector({
      options: {
        appName: 'My wagmi app',
        jsonRpcUrl: `${rpcUrl}/${infuraId}`,
      },
    }),
  ]
}

export default function NextWeb3App({ Component, pageProps }: AppProps) {
  return (  
    <Provider autoConnect connectors={connectors}>
      <Component {...pageProps} />
    </Provider>
  )
}
