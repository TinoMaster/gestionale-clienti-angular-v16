import { FattureDto } from '../models/dto/fatture-dto.model';
import { ProdottoDto } from '../models/dto/prodotto-dto.model';

export function transformPercentage(percentage: number): number {
  return percentage / 100;
}

export function calculateTotalFatture(fatture: FattureDto[]): number {
  return fatture.reduce(
    (acc: number, fattura: FattureDto) => acc + fattura.importo,
    0
  );
}

export function calculateImponibileByFattura(prodotti: ProdottoDto[]): number {
  if (!prodotti) {
    return 0;
  }
  return prodotti.reduce(
    (acc: number, prodotto: ProdottoDto) => acc + prodotto.totale,
    0
  );
}

export function calculateTotaleByFattura(
  imponibile: number,
  iva: number
): number {
  return imponibile * (1 + iva);
}

export function fattureScadonoInThisMonth(
  fatture: FattureDto[]
): FattureDto[] {
  const today = new Date();

  return fatture.filter(
    (fattura: FattureDto) =>
      new Date(fattura.scadenza).getMonth() === today.getMonth() &&
      new Date(fattura.scadenza).getFullYear() === today.getFullYear()
  );
}

export function saldiPerFatture(fatture: FattureDto[]): number {
  return fatture.reduce(
    (acc: number, fattura: FattureDto) => acc + fattura.importo,
    0
  );
}
