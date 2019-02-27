import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeRowComponent } from './safe-row.component';

describe('SafeRowComponent', () => {
  let component: SafeRowComponent;
  let fixture: ComponentFixture<SafeRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
