import { SMGFormula } from "./SMGFormulas"

describe("SMG", () => {
  test("1)", () => {
    const A = 1
    const B = 1
    const res = SMGFormula(A, B).toString()
    expect(res).toMatch((0).toString())
  })
})
