import { AssetList } from '@chain-registry/types';
const assets: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'coolcattestnet',
  assets: [
    {
      description:
        'CoolCat - The Interchain Gaming Hub. $CCAT is the native token for use in the CoolCat Network.',
      denom_units: [
        {
          denom: 'uccat',
          exponent: 0
        },
        {
          denom: 'ccat',
          exponent: 6
        }
      ],
      type_asset: 'native',
      coingecko_id: 'coolcat',
      base: 'uccat',
      name: 'CoolCat',
      display: 'ccat',
      symbol: 'CCAT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.svg',
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/coolcattestnet/images/coolcat.png'
      },
      keywords: ['nft', 'staking', 'games']
    }
  ]
};
export default assets;
