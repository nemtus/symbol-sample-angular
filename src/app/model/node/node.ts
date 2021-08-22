import { Nodes, Node, Network, Protocol } from "./node.model";

export const DEFAULT_HTTP_PORT = 3000;
export const DEFAULT_HTTPS_PORT = 3001;
export const MAINNET_NODE_DOMAIN_LIST: string[] = [
  'symbol-sakura-16.next-web-technology.com',
  'a.symbol.lcnem.net',
  'sym-main-01.opening-line.jp',
  'sym-main-02.opening-line.jp',
  'sym-main-03.opening-line.jp',
  'sym-main-04.opening-line.jp',
  'sym-main-05.opening-line.jp',
  'sym-main-06.opening-line.jp',
  'sym-main-07.opening-line.jp',
  'sym-main-08.opening-line.jp',
  'sym-main-09.opening-line.jp',
  'sym-main-10.opening-line.jp',
  'sym-main-11.opening-line.jp',
  'sym-main.opening-line.jp'
];
export const MAINNET_NODE_IRREGULAR_PORT_NUMBER_LIST: Nodes = [
  {
    protocol: 'https',
    domain: 'a.symbol.lcnem.net',
    port: 443
  }
];
export const TESTNET_NODE_DOMAIN_LIST: string[] = [
  'symbol-test.next-web-technology.com',
  'sym-test-01.opening-line.jp',
  'sym-test-02.opening-line.jp',
  'sym-test-03.opening-line.jp',
  'sym-test-04.opening-line.jp',
  'sym-test-05.opening-line.jp',
  'sym-test-06.opening-line.jp',
  'sym-test-07.opening-line.jp',
  'sym-test-08.opening-line.jp',
  'sym-test-09.opening-line.jp',
  'sym-test.opening-line.jp'
];
export const TESTNET_NODE_IRREGULAR_PORT_NUMBER_LIST: Nodes = [];
export const MAINNET_HTTPS_NODES: Nodes = [
  {
    protocol: 'https',
    domain: 'symbol-sakura-16.next-web-technology.com',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'a.symbol.lcnem.net',
    port: 443
  },
  {
    protocol: 'https',
    domain: 'sym-main-01.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-02.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-03.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-04.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-05.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-06.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-07.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-08.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-09.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-10.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main-11.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-main.opening-line.jp',
    port: 3001
  }
];
export const MAINNET_HTTPS_NODE_URLS: string[] = [
  'https://symbol-sakura-16.next-web-technology.com:3001',
  'https://a.symbol.lcnem.net:443',
  'https://sym-main-01.opening-line.jp:3001',
  'https://sym-main-02.opening-line.jp:3001',
  'https://sym-main-03.opening-line.jp:3001',
  'https://sym-main-04.opening-line.jp:3001',
  'https://sym-main-05.opening-line.jp:3001',
  'https://sym-main-06.opening-line.jp:3001',
  'https://sym-main-07.opening-line.jp:3001',
  'https://sym-main-08.opening-line.jp:3001',
  'https://sym-main-09.opening-line.jp:3001',
  'https://sym-main-10.opening-line.jp:3001',
  'https://sym-main-11.opening-line.jp:3001',
  'https://sym-main.opening-line.jp:3001'
];
export const MAINNET_HTTP_NODES: Nodes = [
  {
    protocol: 'http',
    domain: 'symbol-sakura-16.next-web-technology.com',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'a.symbol.lcnem.net',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-01.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-02.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-03.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-04.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-05.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-06.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-07.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-08.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-09.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-10.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main-11.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-main.opening-line.jp',
    port: 3000
  }
];
export const MAINNET_HTTP_NODE_URLS: string[] = [
  'http://symbol-sakura-16.next-web-technology.com:3000',
  'http://a.symbol.lcnem.net:3000',
  'http://sym-main-01.opening-line.jp:3000',
  'http://sym-main-02.opening-line.jp:3000',
  'http://sym-main-03.opening-line.jp:3000',
  'http://sym-main-04.opening-line.jp:3000',
  'http://sym-main-05.opening-line.jp:3000',
  'http://sym-main-06.opening-line.jp:3000',
  'http://sym-main-07.opening-line.jp:3000',
  'http://sym-main-08.opening-line.jp:3000',
  'http://sym-main-09.opening-line.jp:3000',
  'http://sym-main-10.opening-line.jp:3000',
  'http://sym-main-11.opening-line.jp:3000',
  'http://sym-main.opening-line.jp:3000'
];
export const TESTNET_HTTPS_NODES: Nodes = [
  {
    protocol: 'https',
    domain: 'symbol-test.next-web-technology.com',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-01.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-02.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-03.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-04.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-05.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-06.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-07.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-08.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test-09.opening-line.jp',
    port: 3001
  },
  {
    protocol: 'https',
    domain: 'sym-test.opening-line.jp',
    port: 3001
  }
];
export const TESTNET_HTTPS_NODE_URLS: string[] = [
  'https://symbol-test.next-web-technology.com:3001',
  'https://sym-test-01.opening-line.jp:3001',
  'https://sym-test-02.opening-line.jp:3001',
  'https://sym-test-03.opening-line.jp:3001',
  'https://sym-test-04.opening-line.jp:3001',
  'https://sym-test-05.opening-line.jp:3001',
  'https://sym-test-06.opening-line.jp:3001',
  'https://sym-test-07.opening-line.jp:3001',
  'https://sym-test-08.opening-line.jp:3001',
  'https://sym-test-09.opening-line.jp:3001',
  'https://sym-test.opening-line.jp:3001'
];
export const TESTNET_HTTP_NODES: Nodes = [
  {
    protocol: 'http',
    domain: 'symbol-test.next-web-technology.com',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-01.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-02.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-03.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-04.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-05.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-06.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-07.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-08.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test-09.opening-line.jp',
    port: 3000
  },
  {
    protocol: 'http',
    domain: 'sym-test.opening-line.jp',
    port: 3000
  }
];
export const TESTNET_HTTP_NODE_URLS: string[] = [
  'http://symbol-test.next-web-technology.com:3000',
  'http://sym-test-01.opening-line.jp:3000',
  'http://sym-test-02.opening-line.jp:3000',
  'http://sym-test-03.opening-line.jp:3000',
  'http://sym-test-04.opening-line.jp:3000',
  'http://sym-test-05.opening-line.jp:3000',
  'http://sym-test-06.opening-line.jp:3000',
  'http://sym-test-07.opening-line.jp:3000',
  'http://sym-test-08.opening-line.jp:3000',
  'http://sym-test-09.opening-line.jp:3000',
  'http://sym-test.opening-line.jp:3000'
];
export const MAINNET_HTTPS_REGULAR_NODE: Node = {
  protocol: 'https',
  domain: 'symbol-sakura-16.next-web-technology.com',
  port: 3001
};
export const MAINNET_HTTPS_REGULAR_NODE_URL = 'https://symbol-sakura-16.next-web-technology.com:3001';
export const MAINNET_HTTPS_IREGULAR_NODE: Node = {
  protocol: 'https',
  domain: 'a.symbol.lcnem.net',
  port: 443
};
export const MAINNET_HTTPS_IREGULAR_NODE_URL = 'https://a.symbol.lcnem.net:443';
export const MAINNET_HTTP_REGULAR_NODE: Node = {
  protocol: 'http',
  domain: 'symbol-sakura-16.next-web-technology.com',
  port: 3000
};
export const MAINNET_HTTP_REGULAR_NODE_URL = 'http://symbol-sakura-16.next-web-technology.com:3000';
export const TESTNET_HTTPS_REGULAR_NODE: Node = {
  protocol: 'https',
  domain: 'symbol-test.next-web-technology.com',
  port: 3001
};
export const TESTNET_HTTPS_REGULAR_NODE_URL = 'https://symbol-test.next-web-technology.com:3001';
export const TESTNET_HTTP_REGULAR_NODE: Node = {
  protocol: 'http',
  domain: 'symbol-test.next-web-technology.com',
  port: 3000
};
export const TESTNET_HTTP_REGULAR_NODE_URL = 'http://symbol-test.next-web-technology.com:3000';
