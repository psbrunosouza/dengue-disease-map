import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeLevelsComponent } from './se-levels.component';

describe('SeLevelsComponent', () => {
  let component: SeLevelsComponent;
  let fixture: ComponentFixture<SeLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeLevelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
