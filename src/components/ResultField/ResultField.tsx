import React from "react"

import styles from "./ResultField.module.scss"

interface Props {
  resultName: string
  value: string
}

export function ResultField({resultName, value}: Props) {
  return (
    <div className={styles.name_and_result}>
      <div className={styles.result_name}>{resultName}</div>
      <input
        type="number"
        disabled
        className={styles.result_field}
        value={value}
      />
    </div>
  )
}
