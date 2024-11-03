import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ClientiDTO from '../models/dto/clienti-dto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  url = 'http://localhost:5000/api/clienti';

  constructor(private httpClient: HttpClient) {}

  getAllClients(): Observable<ClientiDTO[]> {
    return this.httpClient.get<ClientiDTO[]>(this.url);
  }

  getClientById(id: number): Observable<ClientiDTO> {
    return this.httpClient.get<ClientiDTO>(`${this.url}/${id}`);
  }

  saveClient(clienteToSave: ClientiDTO): Observable<ClientiDTO> {
    return this.httpClient.post<ClientiDTO>(this.url, clienteToSave);
  }

  updateClient(
    id: number,
    clienteToUpdate: ClientiDTO
  ): Observable<ClientiDTO> {
    return this.httpClient.post<ClientiDTO>(
      `${this.url}/update/${id}`,
      clienteToUpdate
    );
  }

  deleteClient(id: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.url}/delete/${id}`);
  }
}
