import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRouterLinksComponent } from './nav-router-links.component';

describe('NavRouterLinksComponent', () => {
  let component: NavRouterLinksComponent;
  let fixture: ComponentFixture<NavRouterLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRouterLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRouterLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
