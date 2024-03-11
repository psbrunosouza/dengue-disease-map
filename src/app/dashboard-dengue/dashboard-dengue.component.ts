import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ByGenreComponent } from './ui/by-genre/by-genre.component';
import { MapComponent } from './ui/map/map.component';
import { SeLevelsComponent } from './ui/se-levels/se-levels.component';

@Component({
  standalone: true,
  templateUrl: './dashboard-dengue.component.html',
  styleUrl: './dashboard-dengue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MapComponent, SeLevelsComponent, ByGenreComponent],
})
export class DashboardDengueComponent {}
