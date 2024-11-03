import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FattureDto } from '../models/dto/fatture-dto.model';
import { FormFilter } from '../models/common/global.types';

@Injectable({
  providedIn: 'root',
})
export class FattureService {
  url = 'http://localhost:5000/api/fatture';

  constructor(private httpClient: HttpClient) {}

  getAllFatture(filters?: FormFilter): Observable<FattureDto[]> {
    let params = new HttpParams();

    // Agregar parámetros de filtro solo si están definidos
    if (filters?.scadute !== undefined) {
      params = params.set('scadute', filters.scadute.toString());
    }
    if (filters?.minImporto !== undefined && filters?.minImporto > 0) {
      params = params.set('minimporto', filters.minImporto.toString());
    }
    if (filters?.maxImporto !== undefined && filters?.maxImporto > 0) {
      params = params.set('maximporto', filters.maxImporto.toString());
    }

    return this.httpClient.get<FattureDto[]>(this.url, { params });
  }

  getFatturaById(id: number): Observable<FattureDto> {
    return this.httpClient.get<FattureDto>(`${this.url}/${id}`);
  }

  saveFattura(fatturaToSave: FattureDto): Observable<FattureDto> {
    return this.httpClient.post<FattureDto>(this.url, fatturaToSave);
  }

  updateFattura(
    id: number,
    fatturaToUpdate: FattureDto
  ): Observable<FattureDto> {
    return this.httpClient.post<FattureDto>(
      `${this.url}/update/${id}`,
      fatturaToUpdate
    );
  }

  deleteFattura(id: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.url}/delete/${id}`);
  }
}
