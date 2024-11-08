import { ProdottoDto, ProdottoRequest } from '../models/dto/prodotto-dto.model';

export function mapProdottoToDto(prodotto: ProdottoRequest): ProdottoDto {
  return {
    ...prodotto,
    nome: prodotto.name,
    prezzo: prodotto.price,
    descrizione: prodotto.description,
    totale: prodotto.price * prodotto.quantita,
  };
}