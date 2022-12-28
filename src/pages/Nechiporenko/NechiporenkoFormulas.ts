/**
 * Чё это формула считает?
 * @param x чё это вообще? лейкоциты/эритроциты
 * @param coefficient ну типа коэфициент
 */
export const NFormula = (x: number | null, coefficient: 1 | 2 | 4 | 16) =>
  x ? (x * coefficient * 0.031).toFixed(3) : ""

export const NFormulaNormal = (coefficient: 1 | 2 | 4 | 16) => coefficient

/**
 * А эта формула чё считает?
 * @param x и это чё такое
 * @param coefficient ну тоже типа коэфициент
 */
export const AFormula = (x: number | null, coefficient: 1 | 2 | 4 | 16) =>
  x ? ((x * coefficient) / 3).toFixed(3) : ""
