import { FattureDto } from './fatture-dto.model';
export interface ClientiServer {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  fatture?: FattureDto[];
}

export interface ClientiDto {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  fatture?: FattureDto[];
  qtaFatture?: number;
}
