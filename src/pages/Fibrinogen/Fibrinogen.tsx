import React, { useMemo, useState } from "react"

import { Calculator, InputField, Layout, ResultField } from "../../components"
import { Fibrinogen1 } from "./Fibrinogen.formulas"

export function Fibrinogen() {
  const [paramA, setParamA] = useState<number>(0)
  const [paramX, setParamX] = useState<number>(0)

  const result = useMemo(() => Fibrinogen1(paramA, paramX), [paramA, paramX])

  return (
    <Layout>
      <Calculator>
        <div className="input_box">
          <InputField inputName="A" setValue={(value) => setParamA(value)} />
          <InputField inputName="X" setValue={(value) => setParamX(value)} />
        </div>
        <ResultField resultName="F" value={result} />
      </Calculator>
    </Layout>
  )
}
