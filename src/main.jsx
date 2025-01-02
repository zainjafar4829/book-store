import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/Router.jsx";

const root = document.getElementById("root");

createRoot(root).render(<Router />);
