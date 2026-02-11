import express from "express";
import multer from "multer";
import { handleOCR } from "../controllers/fileController.js";
import path from "path";
const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), handleOCR);

export default router;
