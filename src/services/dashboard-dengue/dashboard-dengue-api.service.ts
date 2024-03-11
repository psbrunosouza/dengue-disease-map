import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disease } from '../../interfaces/disease';

interface DiseaseFilter {
  geocode: string;
  disease: string;
}

@Injectable()
export class DashboardDengueApiService {
  constructor(private httpClient: HttpClient) {}

  getDiseasesData(diseaseFilter: any): Observable<any> {
    return this.httpClient.get<Disease>(
      'https://info.dengue.mat.br/api/alertcity',
      {
        params: diseaseFilter,
      }
    );
  }
}
