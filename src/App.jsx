import Home from "./components/Home";
import "./style.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products/category/:category" element={<Home />} />

      <Route path="/products/search/:search" element={<Home />} />

      <Route path="/products/:id" element={<Home />} />

    </Routes>
  );
}