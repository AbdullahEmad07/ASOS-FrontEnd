/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MShoesComponent } from './M-Shoes.component';

describe('MShoesComponent', () => {
  let component: MShoesComponent;
  let fixture: ComponentFixture<MShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
