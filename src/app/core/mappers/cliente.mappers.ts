import { ClientiDto, ClientiServer } from '../models/dto/clienti-dto.model';
import { mapFatturaToDto } from './fattura.mapper';

export function mapClientToDto(cliente: ClientiServer): ClientiDto {
  const totaleFatture = cliente.fatture?.reduce(
    (acc, fattura) => acc + fattura.importo,
    0
  );
  return {
    ...cliente,
    qtaFatture: cliente.fatture?.length ?? 0,
    totaleFatture,
    fatture: cliente.fatture?.map((fattura) => mapFatturaToDto(fattura)),
  };
}
