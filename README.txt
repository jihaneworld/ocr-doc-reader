(workflow)
1.  User uploads file from React frontend → raw image
2.  Send the file to backend (/api/files)
3.  Backend uses Jimp to preprocess image: grayscale, normalize, etc.
4.  Backend runs Tesseract (or sends preprocessed file back)
5.  Extracted text + original file info saved in MongoDB
6.  Frontend receives OCR text → shows progress / lets you manipulate

OCR Document Reader
Description

Application web full-stack permettant de :

Télécharger des documents (images ou PDF)

Extraire le texte avec OCR (Tesseract.js)

Prétraiter les images pour améliorer la précision (Jimp)

Nommer les fichiers et télécharger le texte avec ce nom

Stocker les textes et métadonnées dans MongoDB

L’interface est minimaliste et futuriste avec Tailwind CSS.

Fonctionnalités

Upload de fichiers avec nom personnalisé

Prétraitement des images (greyscale, contraste, normalisation)

OCR précis avec Tesseract.js

Stockage dans MongoDB (texte + nom + date)

Téléchargement du texte en .txt avec nom personnalisé

Édition du texte via outils intégrés

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

Saisir un nom pour le document

Télécharger l’image ou le PDF

OCR automatique → texte affiché à l’écran

Télécharger le texte avec le nom choisi

Futur

Export PDF du texte OCR

Dashboard avec tous les documents

Recherche et filtrage sur le texte

Amélioration de l’OCR (binarisation, redimensionnement, seuil adaptatif)
