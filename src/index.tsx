import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      // How it works?
      navigator.serviceWorker.register("/service-worker.js")

      // .then((registration) => {
      //   console.log("SW registered: ", registration)
      // })
      //
      // .catch((registrationError) => {
      //   console.log("SW registration failed: ", registrationError)
      // })
    })
  }
}
