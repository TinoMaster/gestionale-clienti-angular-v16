import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FattureDto, FattureRequest } from '../models/dto/fatture-dto.model';
import { FormFilter } from '../models/common/global.types';
import { ProdottoDto, ProdottoRequest } from '../models/dto/prodotto-dto.model';
import { mapFatturaToDto } from '../mappers/fattura.mapper';

@Injectable({
  providedIn: 'root',
})
export class FattureService {
  url = 'http://localhost:5000/api/fatture';

  constructor(private httpClient: HttpClient) {}

  getAllFatture(filters?: FormFilter): Observable<FattureDto[]> {
    const params = this.buildFilterParams(filters);

    return this.httpClient
      .get<FattureRequest[]>(this.url, { params })
      .pipe(map((fatture: FattureRequest[]) => fatture.map(mapFatturaToDto)));
  }

  getFatturaById(id: number): Observable<FattureDto> {
    return this.httpClient
      .get<FattureRequest>(`${this.url}/${id}`)
      .pipe(map((fattura: FattureRequest) => mapFatturaToDto(fattura)));
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

  private buildFilterParams(filters?: FormFilter): HttpParams {
    let params = new HttpParams();

    if (filters?.scadute !== undefined) {
      params = params.set('scadute', filters.scadute.toString());
    }
    if (filters?.minImporto !== undefined && filters?.minImporto > 0) {
      params = params.set('minimporto', filters.minImporto.toString());
    }
    if (filters?.maxImporto !== undefined && filters?.maxImporto > 0) {
      params = params.set('maximporto', filters.maxImporto.toString());
    }

    return params;
  }
}
