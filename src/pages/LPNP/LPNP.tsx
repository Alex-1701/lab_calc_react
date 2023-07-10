import React, { useState } from "react"
import { Calculator, InputField, Layout, ResultField } from "@components"
import { LPNPFormula } from "./LPNP.formulas"

export function LPNP() {
  const [paramOXC, setParamOXC] = useState<number | null>(null)
  const [paramLPVP, setParamLPVP] = useState<number | null>(null)
  const [paramTG, setParamTG] = useState<number | null>(null)

  const result = LPNPFormula(paramOXC, paramLPVP, paramTG)

  const clearInputs = (): void => {
    setParamOXC(null)
    setParamLPVP(null)
    setParamTG(null)
  }

  return (
    <Layout onClear={clearInputs}>
      <Calculator
        inputBox={
          <>
            {" "}
            <InputField
              inputName="ОХС"
              setValue={(value) => setParamOXC(value)}
              value={paramOXC}
            />
            <InputField
              inputName="ЛПВТ"
              setValue={(value) => setParamLPVP(value)}
              value={paramLPVP}
            />
            <InputField
              inputName="ТГ"
              setValue={(value) => setParamTG(value)}
              value={paramTG}
            />
          </>
        }
        outputBox={<ResultField resultName="ЛПНП" value={result} />}
      />
    </Layout>
  )
}
