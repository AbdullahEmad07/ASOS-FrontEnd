/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WNewInComponent } from './W-NewIn.component';

describe('WNewInComponent', () => {
  let component: WNewInComponent;
  let fixture: ComponentFixture<WNewInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WNewInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WNewInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
