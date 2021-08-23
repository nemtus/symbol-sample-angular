import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Network, Protocol } from '../node/node.model';
import { Account } from './account.model';
import { AccountInfrastructureService } from './account.infrastructure.service';

export interface InterfaceAccountInfrastructureService {
  getAccount$: (
    network: Network,
    protocol: Protocol,
    address: string
  ) => Observable<Account>;
}

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  account$?: Observable<Account>;

  constructor(
    private accountInfrastructureService: AccountInfrastructureService
  ) {}

  getAccount$(
    network: Network,
    protocol: Protocol,
    address: string
  ): Observable<Account> {
    return this.accountInfrastructureService.getAccount$(
      network,
      protocol,
      address
    );
  }
}
