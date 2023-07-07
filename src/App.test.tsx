import React from "react"

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("check", () => {
  test("calculation of value", () => {
    const x = 2
    const y = 3
    const res = (x * y).toString()
    expect(res).toMatch((6).toString())
  })

  test("calculation of value 2", () => {
    const x = 5
    const y = 4
    const res = (x + y).toString()
    expect(res).toMatch((9).toString())
  })
})
