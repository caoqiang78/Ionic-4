import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElisaKitPage } from './elisa-kit.page';

describe('ElisaKitPage', () => {
  let component: ElisaKitPage;
  let fixture: ComponentFixture<ElisaKitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElisaKitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElisaKitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
