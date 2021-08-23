import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as symbolSdk from 'symbol-sdk';
import { Network, Protocol } from '../node/node.model';
import { NodeService } from '../node/node.service';
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
  private address?: symbolSdk.Address;
  private accountInfo$?: Observable<symbolSdk.AccountInfo>;
  private account$?: Observable<Account>;

  constructor(private nodeService: NodeService) {}

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
    this.address = symbolSdk.Address.createFromRawAddress(address);
    this.accountInfo$ = this.accountHttp.getAccountInfo(this.address);
    this.account$ = this.accountInfo$.pipe(
      map((accountInfo: symbolSdk.AccountInfo) => {
        console.log('accountInfo', accountInfo);
        const account: Account = {
          address: accountInfo.address.plain(),
          publicKey: accountInfo.publicKey.toString(),
          importanceMicroXym: BigInt(accountInfo.importance.toString()),
          mosaics: accountInfo.mosaics.map((tempMosaic) => {
            const mosaic = {
              id: tempMosaic.id.toHex(),
              amount: BigInt(tempMosaic.amount.toString()),
              name: undefined,
              divisibility: undefined,
            };
            return mosaic;
          }),
        };
        return account;
      })
    );
    return this.account$;
  }
}
