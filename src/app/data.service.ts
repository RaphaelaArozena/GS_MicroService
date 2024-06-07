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
  // ... outras propriedades
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://fiap-3sis-gs-20241.azurewebsites.net/';

  constructor(private http: HttpClient) {}

  getData(filters: any): Observable<OceanData[]> {
    let params = new HttpParams();
    for (const key in filters) {
      if (filters[key]) { // Adiciona o filtro apenas se tiver valor
        params = params.append(key, filters[key]);
      }
    }

    return this.http.get<OceanData[]>(this.apiUrl, { params });
  }
}
