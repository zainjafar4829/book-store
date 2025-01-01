import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
      <footer>This is footer of this page</footer>
    </>
  );
}

export default App;
