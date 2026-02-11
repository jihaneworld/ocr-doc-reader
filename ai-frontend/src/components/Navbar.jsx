import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
      location.pathname === path
        ? "bg-blue-600/30 text-cyan-300"
        : "text-blue-200 hover:text-white hover:bg-blue-500/20"
    }`;

  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 bg-[#0B1D51]/80 backdrop-blur-xl border-b border-blue-500/10 shadow-lg shadow-blue-900/20">
      {/* Logo */}
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        AI OCR Suite
      </h1>

      {/* Links */}
      <div className="flex gap-4">
        <Link to="/" className={linkClass("/")}>
          Dashboard
        </Link>
        <Link to="/ocr" className={linkClass("/ocr")}>
          OCR
        </Link>
        <Link to="/invoice" className={linkClass("/invoice")}>
          Invoice
        </Link>
      </div>
    </nav>
  );
}
