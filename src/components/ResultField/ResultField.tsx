import React, { useEffect, useState } from "react"
import clsx from "clsx"

import styles from "./ResultField.module.scss"

interface Props {
  resultName: string
  value: string
  normalValue?: number | null
}

export function ResultField({ resultName, value, normalValue = null }: Props) {
  const [isOk, setIsOk] = useState(true)

  useEffect(() => {
    if (value && normalValue !== null && +value !== normalValue) {
      setIsOk(false)
    } else {
      setIsOk(true)
    }
  }, [value, normalValue])

  return (
    <div className={styles["name-and-result-and-warning"]}>
      <div
        className={clsx(
          styles["name-and-result"],
          !isOk && styles["not-ok-result"]
        )}
      >
        <div className={styles["result-name"]}>{resultName}</div>
        <input
          type="number"
          disabled
          className={styles["result-field"]}
          value={value}
        />
      </div>
      <div className={clsx(!isOk && styles["warning-circle"])} />
    </div>
  )
}
