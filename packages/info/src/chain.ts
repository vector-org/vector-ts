import { Chain } from '@chain-registry/types';
const chain: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'coolcat',
  status: 'live',
  network_type: 'testnet',
  website: 'https://app.coolcat.space/',
  pretty_name: 'CoolCat',
  chain_id: 'kitten-05',
  bech32_prefix: 'ccat',
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'uccat',
        fixed_min_gas_price: 500000,
        low_gas_price: 1,
        average_gas_price: 1.25,
        high_gas_price: 1.5
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
    recommended_version: 'v2.0.0',
    compatible_versions: ['v2.0.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/coolcat-network/coolcat/networks/kitten-05/genesis.json'
    },
    versions: [
      {
        name: 'v2.0.0',
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0']
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
