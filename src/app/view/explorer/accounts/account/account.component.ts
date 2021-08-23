import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/account/account.model';

@Component({
  selector: 'app-view-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class ViewAccountComponent {
  @Input() account$?: Observable<Account>;

  constructor() {}
}
