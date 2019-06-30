import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PEGProductsPage } from './peg-products.page';

describe('PEGProductsPage', () => {
  let component: PEGProductsPage;
  let fixture: ComponentFixture<PEGProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PEGProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PEGProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
