const express = require("express");
const { json } = require("express");
const app = express();
const { PORT, CLIENT_URL } = require("./constants");
const authRoutes = require("./routes/auth");
const orderRoutes = require("./routes/order");
const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");
const itemsRoutes = require("./routes/items");
const bookRoutes = require("./routes/book");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const fs = require("fs");
const path = require("path");
require("./middlewares/passport-middleware");
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
//app.use(cors({ credentials: true }));
app.use(passport.initialize());
app.use("/auth/", authRoutes);
app.use("/user/", userRoutes);
app.use("/book/", bookRoutes);
app.use("/admin/", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});

//Testing
const { uploadToFirebase } = require("./firebase-app/firebase")
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Define a POST endpoint for uploading images
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    // Ensure that a file was uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // Upload the image to Firebase Storage
    const imageUrl = await uploadToFirebase(req.file);

    // Delete the temporary file uploaded to the server
    fs.unlinkSync(req.file.path);

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      imageUrl,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, message: "Failed to upload image" });
  }
});

//Testing
