import { Component } from '@angular/core';
import { FormFilter } from 'src/app/core/models/common/global.types';
import { FattureDto } from 'src/app/core/models/dto/fatture-dto.model';
import { FattureService } from 'src/app/core/services/fatture.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css'],
})
export class FattureComponent {
  fattureList!: FattureDto[];
  filteredFattureList!: FattureDto[];
  viewFilter: boolean = false;

  formFilter: FormFilter = {
    scadute: false,
    minImporto: 0,
    maxImporto: 0,
  };

  constructor(private fattureService: FattureService) {
    this.fattureService.getAllFatture().subscribe((fatture) => {
      this.fattureList = fatture;
      this.filteredFattureList = fatture;
    });
  }

  toggleFilter() {
    this.viewFilter = !this.viewFilter;
    this.filteredFattureList = this.fattureList;
    if (this.viewFilter) {
      this.formFilter = {
        scadute: false,
        minImporto: 0,
        maxImporto: 0,
      };
    }
  }

  deleteFattura(id: number) {
    this.fattureService.deleteFattura(id).subscribe((response) => {
      if (response) {
        this.filteredFattureList = this.filteredFattureList.filter(
          (fatture) => fatture.id !== id
        );
      }
    });
  }

  searchByName(name: string) {
    if (!name) this.filteredFattureList = this.fattureList;
    else {
      this.filteredFattureList = this.fattureList.filter((fatture) => {
        if (fatture.numeroFattura.toLowerCase().includes(name.toLowerCase())) {
          return fatture;
        } else {
          return null;
        }
      });
    }
  }

  onSubmitFilter() {
    this.fattureService.getAllFatture(this.formFilter).subscribe((fatture) => {
      this.filteredFattureList = fatture;
    });
  }
}
