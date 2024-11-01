import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWidgetsComponent } from './simple-widgets.component';

describe('SimpleWidgetsComponent', () => {
  let component: SimpleWidgetsComponent;
  let fixture: ComponentFixture<SimpleWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleWidgetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
