export type Node = {
  protocol: 'https' | 'http';
  domain: string;
  port: number;
};
export type Nodes = Node[];
export type Network = 'mainnet' | 'testnet';
export type Protocol = 'https' | 'http';
