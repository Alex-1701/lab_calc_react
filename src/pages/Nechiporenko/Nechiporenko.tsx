import React, { useState } from "react"
import { Calculator, InputField, Layout, ResultField } from "@components"
import { AFormula, NFormula, NFormulaNormal } from "./NechiporenkoFormulas"

import styles from "./Nechiporenko.module.scss"

export function Nechiporenko() {
  const [paramX, setParamX] = useState<number | null>(null)

  const resultN1 = NFormula(paramX, 1)
  const resultN2 = NFormula(paramX, 2)
  const resultN4 = NFormula(paramX, 4)
  const resultN16 = NFormula(paramX, 16)

  const resultA1 = AFormula(paramX, 1)
  const resultA2 = AFormula(paramX, 2)
  const resultA4 = AFormula(paramX, 4)
  const resultA16 = AFormula(paramX, 16)

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
                value={resultN1}
                normalValue={NFormulaNormal(1)}
              />
              <ResultField resultName="H2" value={resultN2} />
              <ResultField resultName="H4" value={resultN4} />
              <ResultField resultName="H16" value={resultN16} />
            </div>

            <div className={styles.resultBox}>
              <ResultField resultName="A1" value={resultA1} />
              <ResultField resultName="A2" value={resultA2} />
              <ResultField resultName="A4" value={resultA4} />
              <ResultField resultName="A16" value={resultA16} />
            </div>
          </>
        }
      />
    </Layout>
  )
}
