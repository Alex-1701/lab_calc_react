import React, {useMemo, useState} from "react"
import {Calculator, InputField, Layout, ResultField} from "../../components"
import {a1, a16, a2, a4, n1, n16, n2, n4} from "./NechiporenkoFormulas"

import styles from "./Nechiporenko.module.scss"

export function Nechiporenko() {
  const [paramX, setParamX] = useState<number>(0)

  const resH16 = useMemo(() => n16(paramX), [paramX])
  const resH4 = useMemo(() => n4(paramX), [paramX])
  const resH2 = useMemo(() => n2(paramX), [paramX])
  const resH1 = useMemo(() => n1(paramX), [paramX])

  const resA16 = useMemo(() => a16(paramX), [paramX])
  const resA4 = useMemo(() => a4(paramX), [paramX])
  const resA2 = useMemo(() => a2(paramX), [paramX])
  const resA1 = useMemo(() => a1(paramX), [paramX])

  return (
    <Layout>
      <Calculator>
        <div className="input_box">
          <InputField inputName="X" setValue={(value) => setParamX(value)}/>
        </div>

        <div className={styles.results}>
          <div className={styles.result_box}>
            <ResultField resultName="H1" value={resH1}/>
            <ResultField resultName="H2" value={resH2}/>
            <ResultField resultName="H4" value={resH4}/>
            <ResultField resultName="H16" value={resH16}/>
          </div>

          <div className={styles.result_box}>
            <ResultField resultName="A1" value={resA1}/>
            <ResultField resultName="A1" value={resA2}/>
            <ResultField resultName="A1" value={resA4}/>
            <ResultField resultName="A1" value={resA16}/>
          </div>
        </div>
      </Calculator>
    </Layout>
  )
}
