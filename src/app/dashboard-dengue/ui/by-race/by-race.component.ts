import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-by-race',
  standalone: true,
  imports: [],
  templateUrl: './by-race.component.html',
  styleUrl: './by-race.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRaceComponent {}
