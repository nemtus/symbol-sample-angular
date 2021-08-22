import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarModule
} from '@angular/material/snack-bar';
import { of } from 'rxjs';

import { AccountComponent } from './account.component';
import { AccountService } from 'src/app/model/account/account.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatSnackBarModule
      ],
      declarations: [ AccountComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
             params: of({address: 'NDLXI3OMXJCHO2A2ZD54TO4UZJQQV36DQYK33SA'})
          }
        },
        AccountService,
        MatSnackBar
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
