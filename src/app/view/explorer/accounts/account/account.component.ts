import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/account/account.model';
import { Mosaic } from 'src/app/model/mosaic/mosaic.model';

@Component({
  selector: 'app-view-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class ViewAccountComponent {
  @Input() account$?: Observable<Account>;
  @Input() mosaics$?: Observable<Mosaic[]>;

  constructor() {}
}
