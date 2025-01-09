import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <Provider store={store}>
      <Router />
    </Provider>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
