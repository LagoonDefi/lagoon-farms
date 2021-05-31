import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x0a42f69FAa5A8276E12Ab716ea19bf9cbB52a2B8',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x0a42f69FAa5A8276E12Ab716ea19bf9cbB52a2B8',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x0a42f69FAa5A8276E12Ab716ea19bf9cbB52a2B8',
      },
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x0a42f69FAa5A8276E12Ab716ea19bf9cbB52a2B8',
      },
      {
        label: 'DexGuru',
        href: 'https://dex.guru/token/0x0a42f69FAa5A8276E12Ab716ea19bf9cbB52a2B8-bsc',
      },
      {
        label: 'Bogged',
        href: 'https://charts.bogged.finance/?token=0x0a42f69FAa5A8276E12Ab716ea19bf9cbB52a2B8',
      },
    ],
  },
  {
    label: 'Listings',
    icon: 'MoreIcon',
    items: [
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/lagoon-defi',
      },
      {
        label: 'CoinSniper (Go Upvote!)',
        href: 'https://coinsniper.net/coin/828',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/lagoondefi/',
      },
      {
        label: 'Docs',
        href: 'https://lagoondefi.gitbook.io/lagoon-defi/',
      },
      {
        label: 'Dlive',
        href: 'https://dlive.tv/lagoondefi/',
      },
      // {
      //   label: 'Blog',
      //   href: 'https://lagoondefi.medium.com/',
      // },
    ],
  },
  {
    label: 'Audit (Coming Soon)',
    icon: 'AuditIcon',
    href: '#',
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href:
  //     'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
