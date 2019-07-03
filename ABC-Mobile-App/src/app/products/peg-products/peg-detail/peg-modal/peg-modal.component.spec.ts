import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PegModalComponent } from './peg-modal.component';

describe('PegModalComponent', () => {
  let component: PegModalComponent;
  let fixture: ComponentFixture<PegModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PegModalComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PegModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
