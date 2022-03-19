import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersearchsComponent } from './usersearchs.component';

describe('UsersearchsComponent', () => {
  let component: UsersearchsComponent;
  let fixture: ComponentFixture<UsersearchsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersearchsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
