How it works

1.  User uploads file from React frontend → raw image
2.  Send the file to backend (/api/files)
3.  Backend uses Jimp to preprocess image: grayscale, normalize, etc.
4.  Backend runs Tesseract (or sends preprocessed file back)
5.  Extracted text + original file info saved in MongoDB
6.  Frontend receives OCR text → shows progress / lets you manipulate