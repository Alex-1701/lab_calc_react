import React, { useState } from "react"

import { Calculator, InputField, Layout, ResultField } from "@components"

import { FibrinogenFormula } from "./Fibrinogen.formulas"

export function Fibrinogen() {
  const [paramA, setParamA] = useState<number | null>(null)
  const [paramX, setParamX] = useState<number | null>(null)

  const result = FibrinogenFormula(paramA, paramX)

  const clearInputs = () => {
    setParamA(null)
    setParamX(null)
  }

  return (
    <Layout onClear={clearInputs}>
      <Calculator
        inputBox={
          <>
            <InputField
              inputName="A"
              setValue={(value) => setParamA(value)}
              value={paramA}
            />
            <InputField
              inputName="X"
              setValue={(value) => setParamX(value)}
              value={paramX}
            />
          </>
        }
        outputBox={<ResultField resultName="F" value={result} />}
      />
    </Layout>
  )
}
