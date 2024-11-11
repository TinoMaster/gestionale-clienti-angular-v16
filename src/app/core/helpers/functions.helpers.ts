import { FattureDto } from '../models/dto/fatture-dto.model';

export function transformPercentage(percentage: number): number {
  return percentage / 100;
}

export function calculateTotalFatture(fatture: FattureDto[]): number {
  return fatture.reduce(
    (acc: number, fattura: FattureDto) => acc + fattura.importo,
    0
  );
}
