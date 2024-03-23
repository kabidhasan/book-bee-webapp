const { initializeApp } = require("firebase/app");
const { getStorage, ref, getDownloadURL } = require("firebase/storage");
// const { getAnalytics } = require ("firebase/analytics");
const googleStorage = require("@google-cloud/storage");
// const file = require("./img.jpg");
const firebaseConfig = {
  apiKey: "AIzaSyDZl8FmhLOn9naHQgu262EkWJkvOPipiKA",
  authDomain: "book-bee-webapp-8708a.firebaseapp.com",
  projectId: "book-bee-webapp-8708a",
  storageBucket: "book-bee-webapp-8708a.appspot.com",
  messagingSenderId: "490944998227",
  appId: "1:490944998227:web:5624efecbbd3274e7d0fa6",
  measurementId: "G-KRM19Y6J9N",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var admin = require("firebase-admin");

var serviceAccount = require("./private.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://book-bee-webapp-8708a.appspot.com",
});

const { v4: uuidv4 } = require("uuid");

function generateUniqueFilename(originalFilename) {
  const uniqueFilename = uuidv4(); // Generate a UUID
  const fileExtension = originalFilename.split(".").pop(); // Get the file extension
  return `${uniqueFilename}.${fileExtension}`;
}

var bucket = admin.storage().bucket();

async function uploadToFirebase(file) {
  try {
    console.log(file);
    const storage = getStorage();
    console.log(storage);
    const uniqueFilename = generateUniqueFilename(file.originalname);
    const res = await bucket.upload(file.path, {
      destination: "images/" + uniqueFilename, // Use the unique filename as destination
      metadata: {
        contentType: file.mimetype, // Set the content type of the image
      },
    });

    const resUrl = await getDownloadURL(ref(storage, `images/${uniqueFilename}`));
    console.log(resUrl)
    
    
    return resUrl;
  } catch (error) {
    console.error("Error uploading image to Firebase Storage:", error);
    throw error;
  }
}

// Testing

// const fs = require("fs");
// const path = require("path");

// // Path to the local image file
// const filePath = path.join(__dirname, "img.jpg");

// // Read the local image file
// fs.readFile(filePath, async (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }

//     // Create a file object with required properties
//     const file = {
//         path: filePath,
//         originalname: "img.jpg", // You can change this if needed
//         mimetype: "image/jpeg", // You may need to adjust the mimetype based on the file type
//     };
//     //Testing
//     uploadToFirebase(file)
// })
module.exports = { uploadToFirebase };
