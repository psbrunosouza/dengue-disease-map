import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDengueComponent } from './dashboard-dengue.component';

describe('DashboardDengueComponent', () => {
  let component: DashboardDengueComponent;
  let fixture: ComponentFixture<DashboardDengueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDengueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardDengueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
