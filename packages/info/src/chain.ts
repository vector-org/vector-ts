import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'coolcattestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://web.catto.zone/',
  logo_URIs: {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg',
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png'
  },
  keywords: ['nft', 'staking', 'games'],
  pretty_name: 'CoolCat',
  bech32_config: { bech32PrefixAccAddr: 'ccat' },
  chain_id: 'kitten-05',
  bech32_prefix: 'ccat',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'uccat',
        fixed_min_gas_price: 5,
        low_gas_price: 1,
        average_gas_price: 1.5,
        high_gas_price: 2
      }
    ]
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uccat'
      }
    ]
  },
  daemon_name: 'coolcat',
  node_home: '$HOME/.coolcat',
  slip44: 118,
  codebase: {
    git_repo: 'https://github.com/coolcat-network/coolcat',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    cosmos_sdk_version: '0.47.3',
    ibc_go_version: '7',
    cosmwasm_version: '0.40.0',
    consensus: { type: 'cometbft', version: '0.37.2' },
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/coolcat-network/coolcat/main/networks/kitten-05/genesis.json'
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0']
      }
    ]
  },
  peers: {
    seeds: [],
    persistent_peers: []
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.coolcat.space',
        provider: 'Digital Kitchen'
      }
    ],
    rest: [
      {
        address: 'https://lcd.coolcat.space',
        provider: 'Digital Kitchen'
      }
    ],
    grpc: []
  },
  explorers: []
};
export default chain;
