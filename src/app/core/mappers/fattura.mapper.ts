import { FattureDto, FattureServer } from '../models/dto/fatture-dto.model';
import { mapProdottoToDto } from './prodotto.mapper';

export function mapFatturaToDto(fattura: FattureServer): FattureDto {
  return {
    ...fattura,
    prodotti: fattura.prodotti?.map(mapProdottoToDto),
  };
}
