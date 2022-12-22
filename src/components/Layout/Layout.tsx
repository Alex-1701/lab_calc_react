import React from "react"
import { Header } from "../Header"
import { GitHubLink } from "../GitHubLink"

import styles from "./Layout.module.scss"

interface Props {
  children: React.ReactNode
}

export function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
      <GitHubLink />
    </div>
  )
}
