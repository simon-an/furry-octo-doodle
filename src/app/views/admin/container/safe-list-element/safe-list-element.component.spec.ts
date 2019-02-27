import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeListElementComponent } from './safe-list-element.component';

describe('SafeListElementComponent', () => {
  let component: SafeListElementComponent;
  let fixture: ComponentFixture<SafeListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
