import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from '../modules/icons/icons.module';
import { CardComponent } from './ui/card/card.component';
import { MapComponent } from './ui/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, MapComponent, CardComponent, IconsModule],
})
export class AppComponent {
  title = 'dengue-map';
}
