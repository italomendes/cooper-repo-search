import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingTopbarComponent } from './loading-topbar.component';

describe('LoadingTopbarComponent', () => {
  let component: LoadingTopbarComponent;
  let fixture: ComponentFixture<LoadingTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
