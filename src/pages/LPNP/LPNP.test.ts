import { LPNPFormula } from "./LPNP.formulas"

describe("LPNP", () => {
  test("1)", () => {
    const OXC = 1
    const LPVP = 1
    const TG = 1
    const res = LPNPFormula(OXC, LPVP, TG).toString()
    expect(res).toMatch((-0.5).toString())
  })
})
