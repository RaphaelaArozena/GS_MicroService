import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OceanData {
  regiao: string;
  especie: string;
  statusConservacao: string;
  temperaturaAgua: number;
  ph: number;
  nivelPoluicao: string;
}

@Injectable({
  providedIn: 'root'
})
export class OceanDataService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/';

  constructor(private http: HttpClient) {}

// ocean-data.service.ts
getFilteredData(filters: Partial<OceanData>): Observable<OceanData[]> {
  let params = new HttpParams();

  for (const [key, value] of Object.entries(filters)) {
    if (value !== undefined && value !== null) {
      params = params.append(key, typeof value === 'number' ? value.toString() : value);
    }
  }

  return this.http.get<OceanData[]>(this.apiUrl, { params });
}


}
