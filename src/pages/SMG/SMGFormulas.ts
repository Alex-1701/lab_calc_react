/**
 * Спино-мозговая жидкость
 * @param a раз
 * @param b два
 * @constructor
 */
export const SMGFormula = (a: number | null, b: number | null): string =>
  a && b ? ((a - b) / b).toFixed(2) : ""
