/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WClothingComponent } from './W-Clothing.component';

describe('WClothingComponent', () => {
  let component: WClothingComponent;
  let fixture: ComponentFixture<WClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
