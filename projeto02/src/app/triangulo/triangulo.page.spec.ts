import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrianguloPage } from './triangulo.page';

describe('TrianguloPage', () => {
  let component: TrianguloPage;
  let fixture: ComponentFixture<TrianguloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrianguloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrianguloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
