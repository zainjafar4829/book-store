import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Use react-router
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* Parent route */}
      <Route path="/" element={<App />}>
        {/* Child routes */}
        <Route index element={<h1>This is home</h1>} />{" "}
        {/* Default child route */}
        <Route path="orders" element={<h1>This is orders page</h1>} />
        <Route path="about" element={<h1>This is about page</h1>} />
        <Route path="*" element={<h1>This is no content found page</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
