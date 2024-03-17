const client = require("../db");
const { ObjectId } = require("mongodb");

exports.updateProfile = async (req, res) => {
  const newData = req.body;
  const userDetailsCollection = client.db().collection("userDetails");

  try {
    // Find the record using the userId
    const userId = new ObjectId(newData.userId); // userId will be sent from js localStorage
    console.log(userId);
    const userRecord = await userDetailsCollection.findOne({ userId });

    if (!userRecord) {
      res.status(404).json({ success: false, message: "User not found" });
      return;
    }

    // Update the record with the new data
    const updatedRecord = await userDetailsCollection.updateOne(
      { userId },
      {
        $set: {
          name: newData.name,
          contactNo: newData.contactNo,
          presentAddress: newData.presentAddress,
          favouriteBook: newData.favouriteBook,
          photo: newData.photo,
          status: newData.status,
          credits: 500, // Assuming credits always get updated to 500
        },
      }
    );

    if (updatedRecord.modifiedCount === 0) {
      res
        .status(500)
        .json({ success: false, message: "Failed to update user profile" });
      return;
    }

    res
      .status(200)
      .json({ success: true, message: "User profile updated successfully" });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update user profile" });
  }
};
