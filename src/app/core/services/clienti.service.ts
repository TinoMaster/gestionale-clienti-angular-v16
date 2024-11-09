import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ClientiDto, ClientiServer } from '../models/dto/clienti-dto.model';
import { HttpClient } from '@angular/common/http';
import { mapClientToDto } from '../mappers/cliente.mappers';

@Injectable({
  providedIn: 'root',
})
export class ClientiService {
  url = 'http://localhost:5000/api/clienti';

  constructor(private httpClient: HttpClient) {}

  getAllClients(): Observable<ClientiDto[]> {
    return this.httpClient
      .get<ClientiServer[]>(this.url)
      .pipe(map((clienti: ClientiServer[]) => clienti.map(mapClientToDto)));
  }

  getClientById(id: number): Observable<ClientiDto> {
    return this.httpClient
      .get<ClientiServer>(`${this.url}/${id}`)
      .pipe(map((clienti: ClientiServer) => mapClientToDto(clienti)));
  }

  saveClient(clienteToSave: ClientiServer): Observable<ClientiServer> {
    return this.httpClient.post<ClientiServer>(this.url, clienteToSave);
  }

  updateClient(
    id: number,
    clienteToUpdate: ClientiServer
  ): Observable<ClientiServer> {
    return this.httpClient.post<ClientiServer>(
      `${this.url}/update/${id}`,
      clienteToUpdate
    );
  }

  deleteClient(id: number): Observable<boolean> {
    return this.httpClient.get<boolean>(`${this.url}/delete/${id}`);
  }
}
