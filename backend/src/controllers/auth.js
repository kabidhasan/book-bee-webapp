const client= require("../db");
const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");

const axios = require("axios");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT user_id, email FROM users");
    return res.status(201).json(rows);
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password,  name } = req.body;
    const hashedPassword = await hash(password, 10);

    // Use the 'users' collection
    const usersCollection = client.db().collection("users");
    const userDetailsCollection = client.db().collection("userDetails");

    // Insert user information
    const result = await usersCollection.insertOne({
      email,
      name,
      password: hashedPassword
      
     
    });
    const userDetailsResult = await userDetailsCollection.insertOne({
      userId: result.insertedId,
      isVerified: false
    })

    console.log(result.insertedId)

    
      return res.status(201).json({
        success: true,
        msg: "User registration successful",
      });
   
       
   
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Use the 'users' collection
    const usersCollection = client.db().collection("users");

    // Find user by email
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Compare the entered password with the hashed password in the database
    const passwordMatch = await compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, user is authenticated
      return res.status(200).json({
        success: true,
        msg: "User login successful",
        userId: user._id, // or any other user identifier you want to return
      });
    } else {
      // Passwords do not match
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({
      error: error.message,
    });
  }
};

// exports.setPaymentInfo = async (req, res) => {
//   try {
//     console.log("arrived");
//     const { email, acc_no } = req.body;
//     console.log(email);
//     console.log(acc_no);
//     const query = "SELECT email FROM payment_info WHERE email = $1";
//     const result = await db.query(query, [email]);

//     // if there is already a bank account against the email address, we will update it
//     if (result.rows.length) {
//       const updateQuery =
//         "Update payment_info set bank_acc = $1 where email = $2 ";
//       await db.query(updateQuery, [acc_no, email]);

//       return res.status(200).json({
//         success: true,
//         msg: "payment info updated successfully",
//       });
//     }
//     //if there is no entry of the email in the payment_info table, we will insert it
//     else {
//       const insertQuery =
//         "INSERT INTO payment_info (email, bank_acc) VALUES ($1, $2)";
//       await db.query(insertQuery, [email, acc_no]);

//       return res.status(200).json({
//         success: true,
//         msg: "payment info set successfully",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       msg: "Error while verifying payment info",
//       error: error.message,
//     });
//   }
// };

// exports.getCurrentUserEmail = async (req, res) => {
//   try {
//     if (req.user) {
//       const userEmail = req.user.email;
//       res.status(200).json({ success: true, email: userEmail });
//     } else {
//       res
//         .status(401)
//         .json({ success: false, message: "User not authenticated" });
//     }
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// exports.protected = async (req, res) => {
//   try {
//     res.status(200).json({
//       info: "protected info",
//     });
//   } catch (error) {
//     res.status(401).json({
//       error: error.message,
//     });
//   }
// };

// exports.logout = async (req, res) => {
//   try {
//     res.status(200).clearCookie("token", { httpOnly: true }).json({
//       success: true,
//       msg: "Logged out successfully",
//     });
//   } catch (error) {
//     res.status(401).json({
//       error: error.message,
//     });
//   }
// };
