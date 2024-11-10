import { FattureDto, FattureServer } from './fatture-dto.model';
export interface ClientiServer {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  fatture?: FattureServer[];
}

export interface ClientiDto {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  fatture?: FattureDto[];
  qtaFatture?: number;
  totaleFatture?: number;
}
