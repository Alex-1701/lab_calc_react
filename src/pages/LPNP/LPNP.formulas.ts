export const LPNP1 = (OXC: number, LPVP: number, TG: number): string => {
  if (OXC && LPVP && TG) return (OXC - (LPVP + TG / 2.2)).toFixed(1)
  return ""
}
