import { ProdottoDto, ProdottoServer } from '../models/dto/prodotto-dto.model';

export function mapProdottoToDto(prodotto: ProdottoServer): ProdottoDto {
  return {
    nome: prodotto.name,
    prezzo: prodotto.price,
    descrizione: prodotto.description,
    totale: prodotto.price * prodotto.quantita,
    fattura: prodotto.fattura,
    quantita: prodotto.quantita,
    id: prodotto.id,
  };
}
