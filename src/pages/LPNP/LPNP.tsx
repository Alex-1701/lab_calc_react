import React, { useMemo, useState } from "react"
import {InputField, ResultField, Layout, Calculator} from "../../components"
import { LPNP1 } from "./LPNP.formulas"

export function LPNP() {
  const [paramOXC, setParamOXC] = useState<number>(0)
  const [paramLPVP, setParamLPVP] = useState<number>(0)
  const [paramTG, setParamTG] = useState<number>(0)

  const resLPNP: string = useMemo(
    () => LPNP1(paramOXC, paramLPVP, paramTG),
    [paramOXC, paramLPVP, paramTG]
  )

  return (
    <Layout>
      <Calculator>
        <div className="input_box">
          <InputField
            inputName="ОХС"
            setValue={(value) => setParamOXC(value)}
          />
          <InputField
            inputName="ЛПВТ"
            setValue={(value) => setParamLPVP(value)}
          />
          <InputField inputName="ТГ" setValue={(value) => setParamTG(value)} />
        </div>

        <ResultField resultName="ЛПНП" value={resLPNP} />
      </Calculator>
    </Layout>
  )
}
