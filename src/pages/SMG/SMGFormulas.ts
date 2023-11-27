/**
 * Коэффициент атерогенности. Показывает развитие атеросклероза. Спинно-мозговая жидкость.
 * @param OXC ОХС -
 * @param LPVP ЛПВП -
 * @constructor
 */
export const SMGFormula = (OXC: number | null, LPVP: number | null): string =>
  OXC && LPVP ? ((OXC - LPVP) / LPVP).toFixed(2) : ""

// если объединить вкладки ЛС. Липидный спектр.
