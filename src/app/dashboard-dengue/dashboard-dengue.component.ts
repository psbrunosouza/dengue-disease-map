import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ByGenreComponent } from './ui/by-genre/by-genre.component';
import { ByRaceComponent } from './ui/by-race/by-race.component';
import { MapComponent } from './ui/map/map.component';
import { SeLevelsComponent } from './ui/se-levels/se-levels.component';

@Component({
  standalone: true,
  templateUrl: './dashboard-dengue.component.html',
  styleUrl: './dashboard-dengue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MapComponent, SeLevelsComponent, ByGenreComponent, ByRaceComponent],
})
export class DashboardDengueComponent implements AfterViewInit {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit(): void {
    const rect = this.canvas.nativeElement.getBoundingClientRect();

    console.log(rect);

    var ctx = this.canvas.nativeElement.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = 'red';
      ctx.beginPath();
      ctx.moveTo(0, 130);
      ctx.lineTo(200, 130);
      ctx.stroke();
    }
  }
}
