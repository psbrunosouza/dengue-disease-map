import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByGenreComponent } from './by-genre.component';

describe('ByGenreComponent', () => {
  let component: ByGenreComponent;
  let fixture: ComponentFixture<ByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByGenreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
