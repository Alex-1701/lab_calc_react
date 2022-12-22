/**
 * Crop decimal numbers
 * @param value
 * @param count >= 0
 */
export const toDigits = (value: number, count: number):number => {
  if (count >= 0) {
    if (value > 0) {
      return Math.floor(10 ** count * value) / +(10 ** count).toFixed(count)
    }
    return Math.ceil(10 ** count * value) / +(10 ** count).toFixed(count)
  }
  throw new Error("wrong count value")
}

export const Fibrinogen1 = (a: number, x: number): string => {
  if (a && x) {
    const tempValue = toDigits(2.85 / x, 2)

    return (a * tempValue).toFixed(1)
  }
  return ""
}
