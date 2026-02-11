# OCR Document Reader

## Workflow


workflow
    A[Frontend: Upload File] --> B[Send file to backend (/api/files)]
    B --> C[Backend: Preprocess with Jimp (grayscale, normalize)]
    C --> D[Run OCR with Tesseract.js]
    D --> E[Save extracted text + original file info in MongoDB]
    E --> F[Frontend receives OCR text: show progress / manipulate]

Description
Application web full-stack permettant de :
• Télécharger des documents (images ou PDF)
• Extraire le texte avec OCR (Tesseract.js)
• Prétraiter les images pour améliorer la précision (Jimp)
• Nommer les fichiers et télécharger le texte avec ce nom
• Stocker les textes et métadonnées dans MongoDB
L’interface est minimaliste et futuriste avec Tailwind CSS.
Fonctionnalités
• Upload de fichiers avec nom personnalisé
• Prétraitement des images (greyscale, contraste, normalisation)
• OCR précis avec Tesseract.js
• Stockage dans MongoDB (texte + nom + date)
• Téléchargement du texte en .txt avec le nom personnalisé
• Édition du texte via outils intégrés
Technologies
Frontend: React.js, Tailwind CSS, Axios
Backend: Node.js, Express, Multer, Jimp, Tesseract.js, MongoDB (Mongoose)
Installation
Frontend

cd ai-frontend
npm install
npm run dev

Backend

cd ai-backend
npm install
# Crée un fichier .env avec :
# MONGO_URI=your_mongodb_connection_string
# PORT=5000
nodemon server.js

Structure du projet

ai-frontend/
 └─ src/
     ├─ components/  # FileUploader, OCRDisplay, ManipulationTools
     └─ pages/       # OCRPage, Agent, Invoice, Dashboard

ai-backend/
 ├─ controllers/    # fileController.js
 ├─ models/         # File.js
 ├─ routes/         # fileUpload.js
 ├─ uploads/        # fichiers uploadés
 └─ server.js

Usage
1. Saisir un nom pour le document
2. Télécharger l’image ou le PDF
3. OCR automatique → texte affiché à l’écran
4. Télécharger le texte avec le nom choisi
Futur
• Export PDF du texte OCR
• Dashboard avec tous les documents
• Recherche et filtrage sur le texte
• Amélioration de l’OCR (binarisation, redimensionnement, seuil adaptatif)
