/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MClothingComponent } from './M-clothing.component';

describe('MClothingComponent', () => {
  let component: MClothingComponent;
  let fixture: ComponentFixture<MClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
