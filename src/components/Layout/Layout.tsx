import React from "react"
import { noop } from "lodash"
import { Header, GitHubLink } from "@components"

import styles from "./Layout.module.scss"

interface Props {
  children: React.ReactNode
  onClear?: () => void
}

export function Layout({ children, onClear = noop }: Props) {
  return (
    <>
      <Header onClear={onClear} />
      <div className={styles.content}>{children}</div>
      <GitHubLink />
    </>
  )
}
