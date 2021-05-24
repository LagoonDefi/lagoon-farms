import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'LAGOON-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x12AC2bd088AE80eFf62122535C2338DB22a1f21D',
    },
    tokenSymbol: 'LAGOON',
    tokenAddresses: {
      97: '',
      56: '0x271500327D73D998d5A98fC9ca44a33ADF5c4e2A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'LAGOON-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x454f49aafF59e6f04a40c10A799E55aeFA5121Bf',
    },
    tokenSymbol: 'LAGOON',
    tokenAddresses: {
      97: '',
      56: '0x271500327D73D998d5A98fC9ca44a33ADF5c4e2A',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'ETH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'BTCB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xF45cd219aEF8618A92BAa7aD848364a158a24F33',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'DOT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x9fDaaB9312084298d210B8789629D3054230e998',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'LAGOON',
    lpAddresses: {
      97: '',
      56: '0x12AC2bd088AE80eFf62122535C2338DB22a1f21D', // LAGOON-BUSD LP
    },
    tokenSymbol: 'LAGOON',
    tokenAddresses: {
      97: '',
      56: '0x271500327D73D998d5A98fC9ca44a33ADF5c4e2A',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x2Bc123deb65c34a1cF76F04132956fF5228D3399', // LAGOON-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x7213a321F1855CF1779f42c0CD85d3D95291D34C', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x9fDaaB9312084298d210B8789629D3054230e998', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
