import React from "react"
import { noop } from "lodash"
import { Header } from "../Header"
import { GitHubLink } from "../GitHubLink"

import styles from "./Layout.module.scss"

interface Props {
  children: React.ReactNode
  onClear?: () => void
}

export function Layout({ children, onClear = noop }: Props) {
  return (
    <div>
      <Header onClear={onClear} />
      <div className={styles.content}>{children}</div>
      <GitHubLink />
    </div>
  )
}
