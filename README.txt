
# OCR Document Reader

## Description

Full-stack web application for OCR document processing with intelligent image preprocessing. Users can upload images or PDFs, extract text using Tesseract.js, and manage documents through a minimalist futuristic interface.

## Core Workflow

1. User uploads file from React frontend → raw image
2. File sent to backend (/api/files) via Axios
3. Backend processes image with Jimp:
   - Grayscale conversion
   - Normalization
   - Contrast adjustment
   - Adaptive thresholding
4. Tesseract.js extracts text from preprocessed image
5. Extracted text + original file metadata saved to MongoDB
6. Frontend displays OCR results with real-time progress tracking
7. Text manipulation and export tools available

## Features

### Document Processing
- Drag-and-drop file upload interface
- Support for images (PNG, JPG, JPEG) and PDFs
- Custom document naming system
- Automatic image preprocessing pipeline
- High-accuracy OCR with Tesseract.js

### Text Management
- Real-time OCR progress indicator
- Extracted text display with editing capabilities
- Download text as .txt file with custom filename
- Text manipulation tools (case conversion, trim, find/replace)

### Data Persistence
- MongoDB storage for:
  - Original filename and custom document name
  - Extracted text content
  - Upload timestamp
  - File metadata
- Document history and retrieval

## Technology Stack

### Frontend
- React.js with functional components and hooks
- Tailwind CSS for futuristic UI design
- Axios for API communication
- React Dropzone for file uploads

### Backend
- Node.js with Express framework
- Multer for file upload handling
- Jimp for image preprocessing
- Tesseract.js for OCR engine
- MongoDB with Mongoose ODM

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB instance (local or Atlas)
- npm or yarn package manager

### Frontend Setup
1. Navigate to frontend directory:
   cd ai-frontend

2. Install dependencies:
   npm install

3. Start development server:
   npm run dev

Frontend runs on http://localhost:5173

### Backend Setup
1. Navigate to backend directory:
   cd ai-backend

2. Install dependencies:
   npm install

3. Create .env file in root directory:
   MONGO_URI=your_mongodb_connection_string_here
   PORT=5000

4. Start server:
   nodemon server.js

Backend runs on http://localhost:5000

## Project Structure

ai-frontend/
├── src/
│   ├── components/
│   │   ├── FileUploader.jsx      # Drag-drop upload with preview
│   │   ├── OCRDisplay.jsx        # Extracted text viewer
│   │   └── ManipulationTools.jsx # Text editing utilities
│   ├── pages/
│   │   ├── OCRPage.jsx          # Main OCR interface
│   │   ├── Agent.jsx            # Document agent view
│   │   ├── Invoice.jsx          # Invoice processing
│   │   └── Dashboard.jsx        # Document dashboard
│   ├── services/
│   │   └── api.js              # Axios configuration
│   └── App.jsx                 # Root component

ai-backend/
├── controllers/
│   └── fileController.js       # OCR and preprocessing logic
├── models/
│   └── File.js                # MongoDB schema
├── routes/
│   └── fileUpload.js          # API endpoints
├── uploads/                   # Temporary file storage
├── utils/
│   └── imageProcessor.js      # Jimp preprocessing functions
└── server.js                 # Express application entry

## Usage Guide

1. Launch both frontend and backend servers
2. Navigate to OCR page
3. Enter a custom name for your document
4. Drag and drop or click to select an image/PDF
5. Monitor OCR progress in real-time
6. Review and edit extracted text
7. Download text file with your chosen filename
8. Access previously processed documents from Dashboard

## API Endpoints

POST /api/files/upload
- Accepts multipart/form-data with file and documentName
- Returns OCR text and document metadata

GET /api/files
- Retrieves all processed documents
- Returns array of documents with metadata

GET /api/files/:id
- Retrieves specific document by ID

DELETE /api/files/:id
- Removes document from database

## Image Preprocessing Pipeline

The backend implements multi-stage image enhancement:

1. Grayscale conversion for optimal OCR
2. Normalization to standardize brightness
3. Contrast adjustment for text sharpness
4. Adaptive thresholding for varied lighting
5. Noise reduction using median filter
6. Deskewing for rotated documents

## Performance Optimizations

- Client-side file validation before upload
- Streaming file processing for large documents
- MongoDB indexing on frequently queried fields
- Debounced text editing to reduce re-renders
- Lazy loading for document dashboard

## Future Enhancements

- PDF text export functionality
- Advanced document dashboard with search and filters
- Full-text search across all documents
- Multi-language OCR support
- Batch document processing
- User authentication and document ownership
- Cloud storage integration (AWS S3, Google Cloud)
- OCR confidence scoring and manual correction tools



---

