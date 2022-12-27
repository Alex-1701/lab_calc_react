import { NFormula } from "./NechiporenkoFormulas"

describe("Nechiporenko test", () => {
  test("1) n1", () => {
    const X = 1
    const res = NFormula(X, 1).toString()
    expect(res).toMatch((0.031).toString())
  })
})
