import React from "react"
import { useNavigate } from "react-router"
import { Layout } from "@components"
import { pages } from "../../routePath"

import styles from "./Menu.module.scss"

export function Menu() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className={styles.menu}>
        <button
          type="button"
          onClick={() => navigate(pages.Nechiporenko.route)}
        >
          Нечипоренко
        </button>
        <button type="button" onClick={() => navigate(pages.SMG.route)}>
          КА
        </button>
        <button type="button" onClick={() => navigate(pages.LPNP.route)}>
          ЛПНП
        </button>
        <button type="button" onClick={() => navigate(pages.Fibrinogen.route)}>
          Фибриноген
        </button>
      </div>
    </Layout>
  )
}
