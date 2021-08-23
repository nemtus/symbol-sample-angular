import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Account } from 'src/app/model/account/account.model';
import { AccountService } from 'src/app/model/account/account.service';
import { Network, Protocol } from 'src/app/model/node/node.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  network: Network = 'mainnet';
  protocol: Protocol = environment.protocol as Protocol;
  address$?: Observable<string>;
  account$?: Observable<Account>;
  snackBarHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  snackBarVerticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.address$ = this.route.params.pipe(map((params) => params.address));
    this.account$ = this.address$.pipe(
      mergeMap((address): Observable<Account> => {
        return this.accountService.getAccount$(
          this.network,
          this.protocol,
          address
        );
      }),
      catchError((error) => {
        console.error(error);
        this._snackBar.open('Error', 'Close', {
          horizontalPosition: this.snackBarHorizontalPosition,
          verticalPosition: this.snackBarVerticalPosition,
        });
        throw new Error(error);
      })
    );
  }
}
