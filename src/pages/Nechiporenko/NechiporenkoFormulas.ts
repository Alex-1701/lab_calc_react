/**
 * Чё это формула считает?
 * @param x
 * @param coefficient ну типа коэфициент
 * @constructor
 */
export const NFormula = (x: number | null, coefficient: 1 | 2 | 4 | 16) =>
  x ? (x * coefficient * 0.031).toFixed(3) : ""

/**
 * Чё эта формула считает?
 * @param x
 * @param coefficient ну типа коэфициент
 * @constructor
 */
export const AFormula = (x: number | null, coefficient: 1 | 2 | 4 | 16) =>
  x ? ((x * coefficient) / 3).toFixed(3) : ""
