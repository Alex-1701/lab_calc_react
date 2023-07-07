import React from "react"

import styles from "./Calculator.module.scss"

interface Props {
  inputBox: React.ReactNode | React.ReactElement
  outputBox: React.ReactNode | React.ReactElement
}

export function Calculator({ inputBox, outputBox }: Props) {
  return (
    <div className={styles.calculator}>
      <div className={styles.inputBox}>{inputBox}</div>
      <div className={styles.outputBox}>{outputBox}</div>
    </div>
  )
}
