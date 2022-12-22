import React, { useMemo, useState } from "react"

import { Calculator, InputField, Layout, ResultField } from "../../components"
import { SMG1 } from "./SMGFormulas"

export function SMG() {
  const [paramA, setParamA] = useState<number>(0)
  const [paramB, setParamB] = useState<number>(0)

  const resSMG = useMemo(() => SMG1(paramA, paramB), [paramA, paramB])

  return (
    <Layout>
      <Calculator>
        <div className="input_box">
          <InputField inputName="A" setValue={(value) => setParamA(value)} />
          <InputField inputName="B" setValue={(value) => setParamB(value)} />
        </div>

        <ResultField resultName="KA" value={resSMG} />
      </Calculator>
    </Layout>
  )
}
