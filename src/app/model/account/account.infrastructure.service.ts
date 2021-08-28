import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as symbolSdk from 'symbol-sdk';
import { Network, Protocol } from '../node/node.model';
import { NodeService } from '../node/node.service';
import { MosaicService } from '../mosaic/mosaic.service';
import { Account } from './account.model';
import { InterfaceAccountInfrastructureService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AccountInfrastructureService
  implements InterfaceAccountInfrastructureService
{
  private repositoryFactoryHttp?: symbolSdk.RepositoryFactoryHttp;
  private accountHttp?: symbolSdk.AccountRepository;
  private mosaicHttp?: symbolSdk.MosaicRepository;
  private address?: symbolSdk.Address;
  private accountInfo$?: Observable<symbolSdk.AccountInfo>;
  private mosaicsInfo$?: Observable<symbolSdk.MosaicInfo[]>;
  private account$?: Observable<Account>;

  constructor(
    private nodeService: NodeService,
    private mosaicService: MosaicService
  ) {}

  getAccount$(
    network: Network,
    protocol: Protocol,
    address: string
  ): Observable<Account> {
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
    this.address = symbolSdk.Address.createFromRawAddress(address);
    this.accountInfo$ = this.accountHttp.getAccountInfo(this.address);
    this.mosaicsInfo$ = this.accountInfo$.pipe(
      mergeMap((accountInfo) => {
        console.log('accountInfo', accountInfo);
        const mosaicIds = accountInfo.mosaics.map((mosaic) => {
          return new symbolSdk.MosaicId(mosaic.id.toHex());
        });
        const mosaicInfo$ = this.mosaicHttp?.getMosaics(mosaicIds);
        if (mosaicInfo$ === undefined) {
          throw new Error('mosaicInfo$ must not be undefined!');
        }
        return mosaicInfo$;
      })
    );
    this.account$ = combineLatest([this.accountInfo$, this.mosaicsInfo$]).pipe(
      map(([accountInfo, mosaicsInfo]) => {
        console.log('combinedAccountInfo', accountInfo);
        console.log('combinedMosaicsInfo', mosaicsInfo);
        const mosaics = accountInfo.mosaics.map((tempMosaic) => {
          const tempMosaicInfo = mosaicsInfo.filter(
            (tempMosaicInfo) =>
              tempMosaicInfo.id.toHex() === tempMosaic.id.toHex()
          )[0];
          const mosaic = {
            id: tempMosaic.id.toHex(),
            amount: BigInt(tempMosaic.amount.toString()),
            relativeAmount: undefined,
            name: undefined,
            divisibility: tempMosaicInfo.divisibility.valueOf(),
            supply: BigInt(tempMosaicInfo.supply.toString()),
          };
          return this.mosaicService.resolveKnownMosaicName(mosaic);
        });
        return {
          address: accountInfo.address.plain(),
          publicKey: accountInfo.publicKey.toString(),
          importanceMicroXym: BigInt(accountInfo.importance.toString()),
          mosaics: mosaics,
        };
      })
    );
    return this.account$;
  }
}
