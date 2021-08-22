import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/model/account/account.model';

@Component({
  selector: 'app-view-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class ViewAccountComponent implements OnInit {
  @Input() account$?: Observable<Account>;

  constructor() { }

  ngOnInit(): void {
  }

}
