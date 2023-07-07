/**
 * Литопротеиды низкой плотности концентрация
 * @param OXC - Концентрация общего холистерина (милли моль / литр)
 * @param LPVP - Высокая плотность (Концентрация (милли моль / литр))
 * @param TG - Триглицериды (Концентрация низкая). Должне быть меньше 4.5, иначе формула не работает.
 * @constructor
 */
export const LPNPFormula = (
  OXC: number | null,
  LPVP: number | null,
  TG: number | null
): string => {
  if (OXC && LPVP && TG) return (OXC - (LPVP + TG / 2.2)).toFixed(1)
  return ""
}
