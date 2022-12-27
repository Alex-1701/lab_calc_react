import React, { useMemo } from "react"
import { noop } from "lodash"
import { useLocation, useNavigate } from "react-router"
import menu from "../../images/menu.svg"
import clear from "../../images/clear.svg"
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
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        className={styles.menuIcon}
        src={menu}
        onClick={() => navigate(pages.Menu.route)}
        alt=""
      />
      <div className={styles.pageTitle}>{pageName}</div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <img
        className={styles.deleteIcon}
        src={clear}
        onClick={onClear}
        alt=""
      />
    </header>
  )
}
