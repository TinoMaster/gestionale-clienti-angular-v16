import { ProdottoDto } from './prodotto-dto.model';

export interface FattureDto {
  id?: number;
  numeroFattura: string;
  importo: number;
  iva: number;
  scadenza: string;
  prodotti: ProdottoDto[];
  cliente: number;
}
