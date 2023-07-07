import React, { useMemo, useState } from "react"

import { Calculator, InputField, Layout, ResultField } from "@components"
import { SMGFormula } from "./SMGFormulas"

export function SMG() {
  const [paramA, setParamA] = useState<number | null>(null)
  const [paramB, setParamB] = useState<number | null>(null)

  const resSMG = useMemo(() => SMGFormula(paramA, paramB), [paramA, paramB])

  const clearInputs = (): void => {
    setParamA(null)
    setParamB(null)
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
              inputName="B"
              setValue={(value) => setParamB(value)}
              value={paramB}
            />
          </>
        }
        outputBox={<ResultField resultName="KA" value={resSMG} />}
      />
    </Layout>
  )
}
