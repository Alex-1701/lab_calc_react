/**
 * Литопротеины какие-то ???
 * @param OXC
 * @param LPVP
 * @param TG
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
