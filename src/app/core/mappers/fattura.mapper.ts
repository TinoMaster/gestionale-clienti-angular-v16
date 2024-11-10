import { transformPercentage } from '../helpers/functions.helpers';
import { FattureDto, FattureServer } from '../models/dto/fatture-dto.model';
import { mapProdottoToDto } from './prodotto.mapper';

export function mapFatturaToDto(fattura: FattureServer): FattureDto {
  return {
    ...fattura,
    prodotti: fattura.prodotti?.map(mapProdottoToDto),
    qtaProdotti: fattura.prodotti?.length ?? 0,
    iva: transformPercentage(fattura.iva),
  };
}
