import { createRoot } from "react-dom/client"
import App from "./app"
import "./index.css"

const container = document.querySelector("#root")
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}
