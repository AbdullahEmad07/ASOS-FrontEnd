/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MNewInComponent } from './M-NewIn.component';

describe('MNewInComponent', () => {
  let component: MNewInComponent;
  let fixture: ComponentFixture<MNewInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MNewInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MNewInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
