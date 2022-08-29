import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarStubComponent, ShopStubComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });
});

@Component({ selector: 'app-navbar', template: '' })
class NavbarStubComponent {}

@Component({ selector: 'app-shop', template: '' })
class ShopStubComponent {}
