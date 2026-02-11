import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import OCRPage from "./pages/OCRPage";
import Invoice from "./pages/Invoice";
export default function App() {
  return (
    <Router>
      {/* Navbar must be inside Router */}
      <Navbar />

      <main className="min-h-screen p-10 bg-gradient-to-br from-[#0B1D51] via-[#1e3a8a] to-[#0B1D51] text-white">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ocr" element={<OCRPage />} />
          <Route path="/invoice" element={<Invoice />} /> 
        </Routes>
      </main>
    </Router>
  );
}
