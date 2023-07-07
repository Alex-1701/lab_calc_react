/**
 * Crop decimal numbers
 * @param value
 * @param count неотрицательный
 */
export const toDigits = (value: number, count: number): number => {
  if (count >= 0) {
    if (value > 0) {
      return Math.floor(10 ** count * value) / +(10 ** count).toFixed(count)
    }
    return Math.ceil(10 ** count * value) / +(10 ** count).toFixed(count)
  }
  throw new Error("wrong count value")
}

/**
 * Пересчёт в цифры того что выдаёт аппарат. Получает истинное значение по пациентам.
 * 2.85 это выдаёт аппарат (калибратор) - то что должно
 * @param a значение фибриногена поциента
 * @param x коэфициент (фактор) (то что выдал калибратор)
 * @constructor
 */
export const FibrinogenFormula = (
  a: number | null,
  x: number | null
): string => {
  if (a && x) {
    const tempValue = toDigits(2.85 / x, 2)

    return (a * tempValue).toFixed(1)
  }
  return ""
}
