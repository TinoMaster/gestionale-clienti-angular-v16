export interface ProdottoServer {
  id?: number;
  name: string;
  price: number;
  description: string;
  quantita: number;
  fattura: number;
}

export interface ProdottoDto {
  id?: number;
  nome: string;
  prezzo: number;
  descrizione: string;
  quantita: number;
  fattura: number;
  totale?: number;
}
