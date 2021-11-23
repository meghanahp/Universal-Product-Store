import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessariesComponent } from './accessaries.component';

describe('AccessariesComponent', () => {
  let component: AccessariesComponent;
  let fixture: ComponentFixture<AccessariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessariesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
