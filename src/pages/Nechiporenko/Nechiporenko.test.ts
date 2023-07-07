import { AFormula, NFormula } from "./NechiporenkoFormulas"

describe("Nechiporenko test", () => {
  test("1) NFormula", () => {
    const X = 1
    const coefficient = 1
    const res = NFormula(X, coefficient).toString()
    expect(res).toMatch((0.031).toString())
  })

  test("1) AFormula", () => {
    const X = 1
    const coefficient = 1
    const res = AFormula(X, coefficient).toString()
    expect(res).toMatch((0.333).toString())
  })
})
