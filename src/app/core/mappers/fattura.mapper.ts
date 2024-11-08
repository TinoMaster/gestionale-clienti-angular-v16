import { FattureDto, FattureRequest } from '../models/dto/fatture-dto.model';
import { mapProdottoToDto } from './prodotto.mapper';

export function mapFatturaToDto(fattura: FattureRequest): FattureDto {
  return {
    ...fattura,
    prodotti: fattura.prodotti?.map(mapProdottoToDto),
  };
}
