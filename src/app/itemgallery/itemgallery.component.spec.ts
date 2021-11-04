/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemgalleryComponent } from './itemgallery.component';

describe('ItemgalleryComponent', () => {
  let component: ItemgalleryComponent;
  let fixture: ComponentFixture<ItemgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
