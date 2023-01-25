import { Chain } from 'wagmi'

const cypress: Chain = {
	id: 8217,
	name: 'Klaytn',
	network: 'klaytn',
	nativeCurrency: {
		decimals: 18,
		name: 'Klaytn',
		symbol: 'KLAY',
	},
	rpcUrls: {
		default: { http: ['https://public-node-api.klaytnapi.com/v1/cypress'] },
		public: { http: ['https://public-node-api.klaytnapi.com/v1/cypress'] },
	},
	blockExplorers: {
		default: { name: 'klaytnscope', url: 'https://scope.klaytn.com/' },
	},
}

const baobab: Chain = {
	id: 1001,
	name: 'Klaytn',
	network: 'klaytn',
	nativeCurrency: {
		decimals: 18,
		name: 'Klaytn',
		symbol: 'KLAY',
	},
	rpcUrls: {
		default: { http: ['https://public-node-api.klaytnapi.com/v1/baobab'] },
		public: { http: ['https://public-node-api.klaytnapi.com/v1/baobab'] },
	},
	blockExplorers: {
		default: { name: 'klaytnscope', url: 'https://baobab.scope.klaytn.com/' },
	},
}

export { cypress, baobab }
