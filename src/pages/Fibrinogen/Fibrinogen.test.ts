import { Fibrinogen1, toDigits } from "./Fibrinogen.formulas"

describe("Fibrinogen", () => {
  test("1)", () => {
    const A = 1
    const X = 1
    const res = Fibrinogen1(A, X).toString()
    expect(res).toMatch((2.9).toString())
  })

  test("2)", () => {
    const A = 1
    const X = 1
    const res = Fibrinogen1(A, X).toString()
    expect(res).toMatch((2.9).toString())
  })
})

describe("toDigits", () => {
  test("1) value various", () => {
    const value = 123.456
    const count = 0
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123).toString())
  })

  test("2) value various", () => {
    const value = 123.456
    const count = 1
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.4).toString())
  })

  test("3) value various", () => {
    const value = 123.456
    const count = 2
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.45).toString())
  })

  test("4) value various", () => {
    const value = 123.456
    const count = 3
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.456).toString())
  })

  test("5) value various", () => {
    const value = 123.456
    const count = 5
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.456).toString())
  })

  test("6) value low", () => {
    const value = 123.111
    const count = 0
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123).toString())
  })

  test("7) value low", () => {
    const value = 123.111
    const count = 1
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.1).toString())
  })

  test("8) value low", () => {
    const value = 123.111
    const count = 2
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.11).toString())
  })

  test("9) value low", () => {
    const value = 123.111
    const count = 3
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.111).toString())
  })

  test("10) value low", () => {
    const value = 123.111
    const count = 5
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.111).toString())
  })

  test("11) value high", () => {
    const value = 123.999
    const count = 0
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123).toString())
  })

  test("12) value high", () => {
    const value = 123.999
    const count = 1
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.9).toString())
  })

  test("13) value high", () => {
    const value = 123.999
    const count = 2
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.99).toString())
  })

  test("14) value high", () => {
    const value = 123.999
    const count = 3
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.999).toString())
  })

  test("15) value high", () => {
    const value = 123.999
    const count = 5
    const res = toDigits(value, count).toString()
    expect(res).toMatch((123.999).toString())
  })

  test("16) value invalid", () => {
    const value = 123.999
    const count = -1
    const res = () => toDigits(value, count)

    expect(res).toThrow(Error)
    expect(res).toThrow("wrong count value")
  })
})
