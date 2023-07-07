import React, { useMemo, useState } from "react"
import { Calculator, InputField, Layout, ResultField } from "@components"
import { AFormula, NFormula, NFormulaNormal } from "./NechiporenkoFormulas"

import styles from "./Nechiporenko.module.scss"

export function Nechiporenko() {
  const [paramX, setParamX] = useState<number | null>(null)

  const resN1 = useMemo(() => NFormula(paramX, 1), [paramX])
  const resN2 = useMemo(() => NFormula(paramX, 2), [paramX])
  const resN4 = useMemo(() => NFormula(paramX, 4), [paramX])
  const resN16 = useMemo(() => NFormula(paramX, 16), [paramX])

  const resA1 = useMemo(() => AFormula(paramX, 1), [paramX])
  const resA2 = useMemo(() => AFormula(paramX, 2), [paramX])
  const resA4 = useMemo(() => AFormula(paramX, 4), [paramX])
  const resA16 = useMemo(() => AFormula(paramX, 16), [paramX])

  const clearInputs = (): void => {
    setParamX(null)
  }

  return (
    <Layout onClear={clearInputs}>
      <Calculator
        inputBox={
          <InputField
            inputName="X"
            setValue={(value) => setParamX(value)}
            value={paramX}
          />
        }
        outputBox={
          <>
            <div className={styles.resultBox}>
              <ResultField
                resultName="H1"
                value={resN1}
                normalValue={NFormulaNormal(1)}
              />
              <ResultField resultName="H2" value={resN2} normalValue={0} />
              <ResultField resultName="H4" value={resN4} normalValue={0} />
              <ResultField resultName="H16" value={resN16} normalValue={0} />
            </div>

            <div className={styles.resultBox}>
              <ResultField resultName="A1" value={resA1} normalValue={0} />
              <ResultField resultName="A2" value={resA2} normalValue={0} />
              <ResultField resultName="A4" value={resA4} />
              <ResultField resultName="A16" value={resA16} />
            </div>
          </>
        }
      />
    </Layout>
  )
}
