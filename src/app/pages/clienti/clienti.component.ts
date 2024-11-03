import { Component } from '@angular/core';
import ClientiDTO from 'src/app/core/models/dto/clienti-dto.model';
import { ClientiService } from 'src/app/core/services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
})
export class ClientiComponent {
  clientiList!: ClientiDTO[];
  filteredList!: ClientiDTO[];

  constructor(private clientiService: ClientiService) {
    this.clientiService.getAllClients().subscribe((clienti) => {
      this.clientiList = clienti;
      this.filteredList = clienti;
    });
  }

  filtered(name: string) {
    if (!name) this.filteredList = this.clientiList;
    else {
      this.filteredList = this.clientiList.filter((clienti) => {
        if (clienti.nome.toLowerCase().includes(name.toLowerCase())) {
          return clienti;
        } else if (clienti.cognome.toLowerCase().includes(name.toLowerCase())) {
          return clienti;
        } else if (clienti.email.toLowerCase().includes(name.toLowerCase())) {
          return clienti;
        } else {
          return null;
        }
      });
    }
  }

  deleteClient(id: number) {
    this.clientiService.deleteClient(id).subscribe((response) => {
      if (response) {
        this.filteredList = this.filteredList.filter(
          (clienti) => clienti.id !== id
        );
      }
    });
  }
}
