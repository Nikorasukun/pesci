import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNavbarComponent } from './site-navbar.component';

describe('SiteNavbarComponent', () => {
  let component: SiteNavbarComponent;
  let fixture: ComponentFixture<SiteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
