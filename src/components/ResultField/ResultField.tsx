import React from "react"

import styles from "./ResultField.module.scss"

interface Props {
  resultName: string
  value: string
}

export function ResultField({resultName, value}: Props) {
  return (
    <div className={styles.nameAndResult}>
      <div className={styles.resultName}>{resultName}</div>
      <input
        type="number"
        disabled
        className={styles.resultField}
        value={value}
      />
    </div>
  )
}
