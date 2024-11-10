import { ProdottoDto, ProdottoServer } from './prodotto-dto.model';

export interface FattureServer {
  id?: number;
  numeroFattura: string;
  importo: number;
  iva: number;
  scadenza: string;
  prodotti?: ProdottoServer[];
  cliente: number;
}

export interface FattureDto {
  id?: number;
  numeroFattura: string;
  importo: number;
  iva: number;
  scadenza: string;
  prodotti?: ProdottoDto[];
  qtaProdotti?: number;
  cliente: number;
}
