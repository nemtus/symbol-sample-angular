import { Mosaic } from '../mosaic/mosaic.model';

export type Account = {
  address: string;
  publicKey: string;
  importanceMicroXym: bigint;
  mosaics: Mosaic[];
};
