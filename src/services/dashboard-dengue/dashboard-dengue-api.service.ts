import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DiseaseFilter {
  geocode: string;
  disease: string;
  format: string;
  ew_start?: number;
  ew_end?: number;
  ey_start?: number;
  ey_end?: number;
}

@Injectable()
export class DashboardDengueApiService {
  resource: string = 'https://info.dengue.mat.br/api/alertcity';

  constructor(private httpClient: HttpClient) {}

  getDiseasesData(diseaseFilter: DiseaseFilter): Observable<any> {
    return this.httpClient.get(
      `${this.resource}?format=${diseaseFilter.format}&geocode=${diseaseFilter.geocode}&disease=${diseaseFilter.disease}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
