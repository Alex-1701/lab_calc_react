import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Menu, Fibrinogen, LPNP, Nechiporenko, SMG } from "./pages"
import { pages } from "./routePath"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" />} />
        <Route path={pages.Menu.route} element={<Menu />} />
        <Route path={pages.Fibrinogen.route} element={<Fibrinogen />} />
        <Route path={pages.LPNP.route} element={<LPNP />} />
        <Route path={pages.Nechiporenko.route} element={<Nechiporenko />} />
        <Route path={pages.SMG.route} element={<SMG />} />
        <Route path="*" element={<Navigate to="/menu" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
