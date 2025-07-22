import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Assignment2 from "./assignments/Assignment2/Assignment2";
import Assignment3 from "./assignments/Assignment3/Assignment3";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/assignment/2" element={<Assignment2 />} />
      <Route path="/assignment/3" element={<Assignment3 />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
