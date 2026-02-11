import { useState } from "react";
import FileUploader from "../components/FileUploader";
import OCRDisplay from "../components/OCRDisplay";
import ManipulationTools from "../components/ManipulationTools";

export default function OCRPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFile = async (file) => {
    if (!file) return;
    setLoading(true);
    setProgress(0);
    setText("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/api/files", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) setText(data.text);
    } catch (err) {
      console.error(err);
      setText("Error reading document");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-10 w-full max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 animate-float bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-center">
        OCR Document Reader
      </h1>

      {/* File Uploader */}
      <FileUploader handleFile={handleFile} />

      {/* Progress bar */}
      {loading && (
        <div className="w-full bg-blue-800 rounded-xl mt-4 overflow-hidden">
          <div
            className="bg-cyan-400 h-2 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* OCR Text Display */}
      <OCRDisplay text={text} />

      {/* Manipulation Tools */}
      <ManipulationTools text={text} setText={setText} />
    </div>
  );
}
