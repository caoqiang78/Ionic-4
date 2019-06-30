import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganicIntermediatesDetailPage } from './organic-intermediates-detail.page';

describe('OrganicIntermediatesDetailPage', () => {
  let component: OrganicIntermediatesDetailPage;
  let fixture: ComponentFixture<OrganicIntermediatesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganicIntermediatesDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganicIntermediatesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
