import { ClientiDto, ClientiServer } from '../models/dto/clienti-dto.model';

export function mapClientToDto(cliente: ClientiServer): ClientiDto {
  return { ...cliente, qtaFatture: cliente.fatture?.length ?? 0 };
}
