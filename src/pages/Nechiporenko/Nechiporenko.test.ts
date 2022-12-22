import {n1, n2} from "./NechiporenkoFormulas"

describe("n1 test", () => {
  test("1) n1", () => {
    const res = n1(1).toString()
    expect(res).toMatch((0.031).toString())
  })

  test("2) n1", () => {
    const res = n1(1).toString()
    expect(res).toMatch((0.031).toString())
  })

  test("3) n1", () => {
    const res = n1(1).toString()
    expect(res).toMatch((0.031).toString())
  })
})

describe("n2 test", () => {
  test("1) n2", () => {
    const res = n2(1).toString()
    expect(res).toMatch((0.062).toString())
  })

  test("2) n2", () => {
    const res = n2(1).toString()
    expect(res).toMatch((0.062).toString())
  })

  test("3) n2", () => {
    const res = n2(1).toString()
    expect(res).toMatch((0.062).toString())
  })
})
