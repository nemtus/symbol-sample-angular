import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Account } from 'src/app/model/account/account.model';
import { AccountService } from 'src/app/model/account/account.service';
import { Network, Protocol } from 'src/app/model/node/node.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  network: Network = 'mainnet';
  protocol: Protocol = environment.protocol as Protocol;
  address$?: Observable<string>;
  address?: string;
  account$?: Observable<Account>;
  account?: Account;

  constructor(private route: ActivatedRoute, private accountService: AccountService) {
    console.log('constructor triggered!');
    /*
    this.address$ = this.route.params.pipe(map(params => params.address));
    this.address$.subscribe((address) => {
      this.address = address;
      this.account$ = this.accountService.getAccount$(this.network, this.protocol, address);
    });
    this.account$ ? this.account$.subscribe((account) => {
      console.log('account', account);
      this.account = account;
    }) : undefined;
    */
  }

  ngOnInit(): void {
    console.log('ngOnInit triggered!');
    this.address$ = this.route.params.pipe(map(params => params.address));
    this.account$ = this.address$.pipe(mergeMap((address): Observable<Account> => {
      return this.accountService.getAccount$(this.network, this.protocol, address);
    }));
    /*
    this.address$.subscribe((address) => {
      this.address = address;
      this.account$ = this.accountService.getAccount$(this.network, this.protocol, address);
    });
    this.account$ ? this.account$.subscribe((account) => {
      console.log('account', account);
      this.account = account;
    }) : undefined;
    */
  }
}
