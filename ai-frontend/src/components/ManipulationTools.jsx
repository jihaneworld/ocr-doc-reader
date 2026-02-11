export default function ManipulationTools({ text, setText }) {
  const copyText = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    alert("Text copied!");
  };

  const clearText = () => setText("");

  return (
    <div className="flex gap-4 mt-6 justify-center">
      <button
        onClick={copyText}
        className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/40 transition-all duration-300"
      >
        Copy
      </button>

      <button
        onClick={clearText}
        className="px-4 py-2 rounded-xl bg-red-600/70 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-red-400/40 transition-all duration-300"
      >
        Clear
      </button>

      {/* Placeholder for future features */}
      <button
        className="px-4 py-2 rounded-xl bg-green-600/70 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-green-400/40 transition-all duration-300"
      >
        Highlight
      </button>
    </div>
  );
}
