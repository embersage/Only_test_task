import { createRoot } from "react-dom/client";
import { App } from "./app/App";
import "./app/styles/index.scss";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
