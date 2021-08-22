export type Account = {
  address: string;
  publicKey: string;
  importanceMicroXym: bigint;
  mosaics: {
    id: string;
    amount: bigint;
    name?: string;
    divisibility?: number;
  }[];
};
