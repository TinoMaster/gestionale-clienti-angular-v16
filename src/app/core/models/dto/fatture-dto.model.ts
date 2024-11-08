import { ProdottoDto, ProdottoRequest } from './prodotto-dto.model';

export interface FattureRequest {
  id?: number;
  numeroFattura: string;
  importo?: number;
  iva: number;
  scadenza: string;
  prodotti?: ProdottoRequest[];
  cliente: number;
}

export interface FattureDto {
  id?: number;
  numeroFattura: string;
  importo?: number;
  iva: number;
  scadenza: string;
  prodotti?: ProdottoDto[];
  cliente: number;
}
