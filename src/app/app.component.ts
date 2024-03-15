import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from '../modules/icons/icons.module';
import { DashboardDengueApiService } from '../services/dashboard-dengue/dashboard-dengue-api.service';
import { CardComponent } from './ui/card/card.component';
import { MapComponent } from './ui/map/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MapComponent,
    CardComponent,
    IconsModule,
    HttpClientModule,
  ],
  providers: [DashboardDengueApiService],
})
export class AppComponent implements OnInit {
  title = 'dengue-map';

  constructor(private dashboardDengueApiService: DashboardDengueApiService) {}

  ngOnInit(): void {
    this.listDiseaseData();
  }

  listDiseaseData() {
    this.dashboardDengueApiService
      .getDiseasesData({
        geocode: '2977408',
        disease: 'dengue',
        format: 'json',
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
