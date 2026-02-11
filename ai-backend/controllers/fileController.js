import { Jimp } from "jimp";
import Tesseract from "tesseract.js";
import File from "../models/File.js";

export const handleOCR = async (req, res) => {
  try {
    const { originalname, filename, path } = req.file;

    // --- 1️⃣ Preprocess image with Jimp ---
    const image = await Jimp.read(path);
    image
      .greyscale()
      .contrast(0.5)
      .normalize();
    await image.write(path); // overwrite preprocessed image

    // --- 2️⃣ OCR with Tesseract ---
    const { data } = await Tesseract.recognize(path, "eng", {
      tessedit_char_whitelist:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,-!?()",
    });

    // --- 3️⃣ Save to MongoDB ---
    const newFile = new File({
      filename,
      originalName: originalname,
      ocrText: data.text,
    });

    await newFile.save();

    res.json({ success: true, text: data.text, file: newFile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
};

export const getFiles = async (req, res) => {
  try {
    const files = await File.find().sort({ uploadDate: -1 });
    res.json(files);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
