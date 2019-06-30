import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElisaDetailPage } from './elisa-detail.page';

describe('ElisaDetailPage', () => {
  let component: ElisaDetailPage;
  let fixture: ComponentFixture<ElisaDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElisaDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElisaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
