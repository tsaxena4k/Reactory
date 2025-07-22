import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import "./App.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-theme");
    }
  }, []);
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column min-vh-100">
        <Navbar />
        <main className="container text-center flex-grow-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
