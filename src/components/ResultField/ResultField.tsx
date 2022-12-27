import React from "react"

import styles from "./ResultField.module.scss"

interface Props {
  resultName: string
  value: string
}

export function ResultField({resultName, value}: Props) {
  return (
    <div className={styles['name-and-result']}>
      <div className={styles['result-name']}>{resultName}</div>
      <input
        type="number"
        disabled
        className={styles['result-field']}
        value={value}
      />
    </div>
  )
}
