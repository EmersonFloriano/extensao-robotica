import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singin" element={<div />} />
    </Routes>
  );
}
