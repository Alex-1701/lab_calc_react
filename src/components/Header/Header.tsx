import React, { useMemo } from "react"
import { noop } from "lodash"
import { useLocation, useNavigate } from "react-router"
import Menu from "../../images/menu.svg"
import Clear from "../../images/clear.svg"
import { pages } from "../../routePath"

import styles from "./Header.module.scss"

interface Props {
  onClear?: () => void
}

export function Header({ onClear = noop }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  const pageName = useMemo(() => {
    const res = Object.entries(pages).find(
      (p) => p[1].route === location.pathname
    )

    if (res) {
      return res[1].name
    }
    return ""
  }, [location.pathname])

  return (
    <header className={styles.pageHeader}>
      <Menu
        className={styles.menuIcon}
        onClick={() => navigate(pages.Menu.route)}
      />
      <div className={styles.pageTitle}>{pageName}</div>
      <Clear className={styles.deleteIcon} onClick={onClear} />
    </header>
  )
}
