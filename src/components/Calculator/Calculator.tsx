import React from "react"

import styles from "./Calculator.module.scss"

interface Props {
  children: React.ReactNode
}

export function Calculator({ children }: Props) {
  return <div className={styles.calculator}>{children}</div>
}
