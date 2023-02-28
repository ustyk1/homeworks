import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hw20230228Component } from './hw-2023-02-28.component';

describe('UserCardsComponent', () => {
  let component: Hw20230228Component;
  let fixture: ComponentFixture<Hw20230228Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hw20230228Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hw20230228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
