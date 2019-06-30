import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicIntermediatesPage } from './organic-intermediates.page';

describe('OrganicIntermediatesPage', () => {
  let component: OrganicIntermediatesPage;
  let fixture: ComponentFixture<OrganicIntermediatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicIntermediatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicIntermediatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
