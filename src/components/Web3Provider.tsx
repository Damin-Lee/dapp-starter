import { useTheme } from 'next-themes'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { ConnectKitProvider } from 'connectkit'
import { publicProvider } from 'wagmi/providers/public'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { klaytn } from './KlaytnProvider'

const { chains, provider } = configureChains(
	[chain.goerli, klaytn.baobab],
	[alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY }), publicProvider()]
)

const client = createClient({
	autoConnect: true,
	connectors: [new MetaMaskConnector({ chains })],
	provider,
})
const Web3Provider = ({ children }) => {
	const { resolvedTheme } = useTheme()

	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
