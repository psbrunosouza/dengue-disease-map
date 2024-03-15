import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRaceComponent } from './by-race.component';

describe('ByRaceComponent', () => {
  let component: ByRaceComponent;
  let fixture: ComponentFixture<ByRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByRaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
