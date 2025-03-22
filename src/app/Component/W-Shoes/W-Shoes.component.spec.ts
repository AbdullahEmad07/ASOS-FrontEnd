/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WShoesComponent } from './W-Shoes.component';

describe('WShoesComponent', () => {
  let component: WShoesComponent;
  let fixture: ComponentFixture<WShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
