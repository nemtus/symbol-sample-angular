import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDisclaimerComponent } from './disclaimer.component';

describe('ViewDisclaimerComponent', () => {
  let component: ViewDisclaimerComponent;
  let fixture: ComponentFixture<ViewDisclaimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDisclaimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDisclaimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
