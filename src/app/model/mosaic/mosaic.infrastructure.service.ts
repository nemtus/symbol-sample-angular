import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as symbolSdk from 'symbol-sdk';
import { Network, Protocol } from '../node/node.model';
import { NodeService } from '../node/node.service';
import { Mosaic } from './mosaic.model';
import { InterfaceMosaicInfrastructureService } from './mosaic.service';
import { KNOWN_MOSAICS } from './mosaic';

@Injectable({
  providedIn: 'root',
})
export class MosaicInfrastructureService
  implements InterfaceMosaicInfrastructureService
{
  private repositoryFactoryHttp?: symbolSdk.RepositoryFactoryHttp;
  private accountHttp?: symbolSdk.AccountRepository;
  private mosaicHttp?: symbolSdk.MosaicRepository;
  private mosaicId?: symbolSdk.MosaicId;
  private mosaicInfo$?: Observable<symbolSdk.MosaicInfo>;
  private mosaicsView$?: Observable<symbolSdk.MosaicAmountView[]>;
  private mosaic$?: Observable<Mosaic>;
  private mosaics$?: Observable<Mosaic[]>;

  constructor(private nodeService: NodeService) {}

  resolveKnownMosaicName(mosaic: Mosaic): Mosaic {
    KNOWN_MOSAICS.forEach((knownMosaic) => {
      if (knownMosaic.id === mosaic.id) {
        mosaic.name = knownMosaic.name;
        mosaic.logo = knownMosaic.logo;
      }
    });
    return mosaic;
  }

  getMosaic$(
    network: Network,
    protocol: Protocol,
    mosaicId: string
  ): Observable<Mosaic> {
    if (this.nodeService.nodes === undefined) {
      this.nodeService.init(network, protocol);
    }
    if (this.nodeService.nodeUrl === undefined) {
      throw new Error('nodeService.nodeUrl must not be undefined!');
    }
    this.repositoryFactoryHttp = new symbolSdk.RepositoryFactoryHttp(
      this.nodeService.nodeUrl
    );
    this.mosaicHttp = this.repositoryFactoryHttp.createMosaicRepository();
    this.mosaicId = new symbolSdk.MosaicId(mosaicId);
    this.mosaicInfo$ = this.mosaicHttp.getMosaic(this.mosaicId);
    this.mosaic$ = this.mosaicInfo$.pipe(
      map((mosaicInfo: symbolSdk.MosaicInfo) => {
        console.log('mosaicInfo', mosaicInfo);
        const mosaic: Mosaic = {
          id: mosaicInfo.id.toHex(),
          amount: BigInt(0),
          relativeAmount: undefined,
          name: undefined,
          divisibility: mosaicInfo.divisibility.valueOf(),
          supply: BigInt(mosaicInfo.divisibility.toString()),
          logo: undefined,
        };
        return this.resolveKnownMosaicName(mosaic);
      })
    );
    return this.mosaic$;
  }

  getMosaics$(
    network: Network,
    protocol: Protocol,
    address: string
  ): Observable<Mosaic[]> {
    if (this.nodeService.nodes === undefined) {
      this.nodeService.init(network, protocol);
    }
    if (this.nodeService.nodeUrl === undefined) {
      throw new Error('nodeService.nodeUrl must not be undefined!');
    }
    this.repositoryFactoryHttp = new symbolSdk.RepositoryFactoryHttp(
      this.nodeService.nodeUrl
    );
    this.accountHttp = this.repositoryFactoryHttp.createAccountRepository();
    this.mosaicHttp = this.repositoryFactoryHttp.createMosaicRepository();
    const symbolSdkMosaicService = new symbolSdk.MosaicService(
      this.accountHttp,
      this.mosaicHttp
    );
    this.mosaicsView$ = symbolSdkMosaicService.mosaicsAmountViewFromAddress(
      symbolSdk.Address.createFromRawAddress(address)
    );
    this.mosaics$ = this.mosaicsView$.pipe(
      map((mosaicsView) => {
        console.log('mosaicsView', mosaicsView);
        return mosaicsView.map((mosaicView) => {
          return this.resolveKnownMosaicName({
            id: mosaicView.mosaicInfo.id.toHex(),
            amount: BigInt(mosaicView.amount.toString()),
            relativeAmount: mosaicView.relativeAmount(),
            name: mosaicView.fullName(),
            divisibility: mosaicView.mosaicInfo.divisibility.valueOf(),
            supply: BigInt(mosaicView.mosaicInfo.supply.toString()),
            logo: undefined,
          });
        });
      })
    );
    return this.mosaics$;
  }
}
