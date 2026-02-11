export default function OCRDisplay({ text }) {
  return (
    <div className="mt-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl w-full text-blue-100 font-mono whitespace-pre-wrap">
      {text || "Your extracted text will appear here"}
    </div>
  );
}
