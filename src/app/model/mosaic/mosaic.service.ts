import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Network, Protocol } from '../node/node.model';
import { KNOWN_MOSAICS } from './mosaic';
import { MosaicInfrastructureService } from './mosaic.infrastructure.service';
import { Mosaic } from './mosaic.model';

export interface InterfaceMosaicInfrastructureService {
  getMosaic$: (
    network: Network,
    protocol: Protocol,
    mosaicId: string
  ) => Observable<Mosaic>;

  getMosaics$: (
    network: Network,
    protocol: Protocol,
    address: string
  ) => Observable<Mosaic[]>;
}

@Injectable({
  providedIn: 'root',
})
export class MosaicService {
  private mosaic$?: Observable<Mosaic>;
  private mosaics$?: Observable<Mosaic[]>;

  constructor(
    private mosaicInfrastructureService: MosaicInfrastructureService
  ) {}

  getMosaic$(
    network: Network,
    protocol: Protocol,
    mosaicId: string
  ): Observable<Mosaic> {
    this.mosaic$ = this.mosaicInfrastructureService.getMosaic$(
      network,
      protocol,
      mosaicId
    );
    return this.mosaic$;
  }

  getMosaics$(
    network: Network,
    protocol: Protocol,
    address: string
  ): Observable<Mosaic[]> {
    this.mosaics$ = this.mosaicInfrastructureService.getMosaics$(
      network,
      protocol,
      address
    );
    return this.mosaics$;
  }

  resolveKnownMosaicName(mosaic: Mosaic): Mosaic {
    KNOWN_MOSAICS.forEach((knownMosaic) => {
      if (knownMosaic.id === mosaic.id) {
        mosaic.name = knownMosaic.name;
        mosaic.logo = knownMosaic.logo;
      }
    });
    return mosaic;
  }

  resolveKnownMosaicsName(mosaics: Mosaic[]): Mosaic[] {
    KNOWN_MOSAICS.forEach((knownMosaic) => {
      mosaics.forEach((mosaic) => {
        if (knownMosaic.id === mosaic.id) {
          mosaic.name = knownMosaic.name;
          mosaic.logo = knownMosaic.logo;
        }
      });
    });
    return mosaics;
  }
}
