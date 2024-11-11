import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdottoDto, ProdottoServer } from '../models/dto/prodotto-dto.model';
import { map, Observable } from 'rxjs';
import { mapProdottoToDto } from '../mappers/prodotto.mapper';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  url = 'http://localhost:5000/api/prodotti';

  constructor(private httpClient: HttpClient) {}

  getProdottoById(id: number): Observable<ProdottoDto> {
    return this.httpClient
      .get<ProdottoServer>(`${this.url}/${id}`)
      .pipe(map((prodotto: ProdottoServer) => mapProdottoToDto(prodotto)));
  }

  createProdotto(prodottoToSave: ProdottoServer): Observable<ProdottoServer> {
    console.log(prodottoToSave);
    return this.httpClient.post<ProdottoServer>(this.url, prodottoToSave);
  }

  deleteProdotto(id: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.url}/delete/${id}`);
  }
}
