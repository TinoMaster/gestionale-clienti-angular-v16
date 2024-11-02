import { FattureDto } from './fatture-dto.model';

export default interface ClientiDTO {
  id?: number;
  nome: string;
  cognome: string;
  email: string;
  fatture?: FattureDto[];
}
