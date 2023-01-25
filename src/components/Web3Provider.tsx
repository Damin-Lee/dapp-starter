import { useTheme } from 'next-themes'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, goerli } from 'wagmi/chains'

import { cypress, baobab } from './KlaytnProvider'

const { chains, provider } = configureChains(
	[goerli, baobab],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
)

const client = createClient(
	getDefaultClient({
		autoConnect: false,
		appName: process.env.NEXT_PUBLIC_APP_NAME,
		chains,
	})
)

const Web3Provider = ({ children }) => {
	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider mode="dark">{children}</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
