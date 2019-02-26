import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLandingPageComponent } from './home-landing-page.component';
import { MatListModule, MatIconModule, MatSidenavModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '~layout/layout.module';

describe('HomeLandingPageComponent', () => {
  let component: HomeLandingPageComponent;
  let fixture: ComponentFixture<HomeLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLandingPageComponent],
      imports: [
        CommonModule,
        LayoutModule,
        NoopAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
