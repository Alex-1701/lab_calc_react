import React from "react"
import { useLocation, useNavigate } from "react-router"
import Menu from "@images/menu.svg"
import Clear from "@images/clear.svg"
import { pages } from "../../routePath"

import styles from "./Header.module.scss"

interface Props {
  onClear?: () => void
}

export function Header({ onClear }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  const currentPage = Object.entries(pages).find(
    (page) => page[1].route === location.pathname,
  )

  return (
    <header className={styles.pageHeader}>
      <button
        aria-label="menu"
        type="button"
        className={styles.icon}
        onClick={() => navigate(pages.Menu.route)}
      >
        <Menu />
      </button>
      <div className={styles.pageTitle}>
        {currentPage ? currentPage[1].title : ""}
      </div>
      <button
        aria-label="clear"
        type="button"
        className={styles.icon}
        onClick={onClear}
      >
        <Clear />
      </button>
    </header>
  )
}
