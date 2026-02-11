import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  filename: String,       // stored filename on server
  originalName: String,   // original uploaded filename
  ocrText: String,        // extracted text
  uploadDate: { type: Date, default: Date.now },
});

export default mongoose.model("File", FileSchema);
