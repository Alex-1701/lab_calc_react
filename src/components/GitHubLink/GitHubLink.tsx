import React from "react"

import styles from "./GitHubLink.module.scss"

export function GitHubLink() {
  return (
    <a
      className={styles.version}
      href="https://github.com/Alex-1701/lab_calc_react"
      target="_blank"
      rel="noreferrer"
      tabIndex={-1}
    >
      lab calc v3.0.5
    </a>
  )
}
