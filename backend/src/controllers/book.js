const client = require("../db");
const { ObjectId } = require("mongodb");
const { uploadToFirebase } = require("../firebase-app/firebase");

exports.addBook = async (req, res) => {
  const bookData = req.body;

  // Access uploaded image file from req.file
  const imageFile = req.file;
  const url = await uploadToFirebase(imageFile);
  console.log(url);
  const booksCollection = client.db().collection("books");
  // booksCollection.deleteMany({})
  try {
    // console.log(req)
    // // console.log(`req.body: ${ req.body }`)
    // console.log(bookData)
    // console.log(textData.name)
    // Insert the book data into the database
    // credit, no.of exchnage =0, no. of expectations=0 userId from localStorage
    const result = await booksCollection.insertOne({ ...bookData, image: url });
    console.log(result);
    if (result.acknowledged) {
      res
        .status(200)
        .json({ success: true, message: "Book added successfully" });
    } else {
      throw new Error("Failed to add book");
    }
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ success: false, message: "Failed to add book" });
  }
};

exports.getAllBooks = async (req, res) => {
  const booksCollection = client.db().collection("books");

  try {
    // Find all books in the database
    const books = await booksCollection.find({}).toArray();

    res.status(200).json({ success: true, books });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ success: false, message: "Failed to fetch books" });
  }
};

exports.getBookById = async (req, res) => {
  const { id } = req.params; // Assuming the ID is passed as a URL parameter

  const booksCollection = client.db().collection("books");

  try {
    // Convert the ID string to ObjectId
    const bookId = new ObjectId(id);

    // Find the book by ID in the database
    const book = await booksCollection.findOne({ _id: bookId });

    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: "Book not found" });
    }

    res.status(200).json({ success: true, book });
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ success: false, message: "Failed to fetch book" });
  }
};

exports.requestBook = async (req, res) => {
  let requestBookData = req.body;
  const booksCollection = client.db().collection("books");
  const exchangeCollection = client.db().collection("exchange");
  console.log(requestBookData);
  requestBookData["bookId"] = requestBookData["_id"];
  delete requestBookData["_id"];
  console.log(requestBookData);

  const exchangeData = {
    contributor: requestBookData.contributor,
    benificiary: requestBookData.benificiary,
    bookId: requestBookData.bookId,
    "respondedByContributor": false,
    "responseType": null,
    "scheduleConfirmedByContributor": false,
    "scheduledMeetUp": null, "exchangeVerifiedByBenificiary": false,
    "exchangeVerifiedByContributor": false,
    "scheduleConfirmationType": false
  };
  console.log(exchangeData);
  // const bookId = new ObjectId(requestBookData.bookId);

  try {
    // Insert the book request data into the exchange collection
    // const bookResult = await booksCollection.findOne(bookId);
    // const contributorId = bookResult["userId"];
    // console.log("========================");
    // console.log(contributorId);
    // requestBookData.contributorId = contributorId;
    const result = await exchangeCollection.insertOne(exchangeData);
    console.log(result);
    if (result.acknowledged) {
      res.status(200).json({
        success: true,
        message: "Book request submitted successfully",
      });
    } else {
      throw new Error("Failed to submit book request");
    }
  } catch (error) {
    console.error("Error submitting book request:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit book request" });
  }
};

exports.getAllRequestsByContributorId = async (req, res) => {
  const exchangeCollection = client.db().collection("exchange");
  const { contributorId } = req.query;

  try {
    const result = await exchangeCollection
      .find({ contributor: contributorId })
      .toArray();

    res.status(200).json({ success: true, requests: result });
  } catch (error) {
    console.error("Error fetching requests by contributorId:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch requests by contributorId",
    });
  }
};

exports.respondByRequestId = async (req, res) => {
  const { requestId, responseType } = req.body;
  const requestIdObject = new ObjectId(requestId);

  const exchangeCollection = client.db().collection("exchange");

  try {
    // Update the request by requestId to mark it as responded
    const result = await exchangeCollection.updateOne(
      { _id: requestIdObject }, // Query condition to specify which request to update
      { $set: { respondedByContributor: true, responseType: responseType } } // Update operation to mark the request as responded
    );
    console.log(result);
    if (result.modifiedCount === 0) {
      throw new Error("Failed to mark request as responded");
    }

    res
      .status(200)
      .json({ success: true, message: "Request responded successfully" });
  } catch (error) {
    console.error("Error responding to request:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to respond to request" });
  }
};

exports.getAllRequestsByBenificiaryId = async (req, res) => {
  const { userId } = req.query;
  try {
    const exchangeCollection = client.db().collection("exchange");
    const result = await exchangeCollection.find({ benificiary: userId }).toArray();
    res.status(200).json({ success: true, requests: result });
  } catch (error) {
    console.error("Error fetching requests by benificiaryId:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch requests by benificiaryId",
    });
  }
};

exports.scheduleMeetUpByBenificiary = async (req, res) => {
  const { dateTime, location, requestId, benificiaryId } = req.body;

  const exchangeCollection = client.db().collection("exchange");

  try {
    const requestIdObject = new ObjectId(requestId);

    // Update the request with the scheduled meet-up details
    const result = await exchangeCollection.updateOne(
      { _id: requestIdObject }, // Query condition to specify which request to update
      {
        $set: {
          scheduledMeetUp: {
            dateTime,
            location,
          },
          scheduleConfirmedByContributor: false,
        },
      }
    );

    if (result.modifiedCount === 0) {
      throw new Error("Failed to schedule meet-up");
    }

    res
      .status(200)
      .json({ success: true, message: "Meet-up scheduled successfully" });
  } catch (error) {
    console.error("Error scheduling meet-up:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to schedule meet-up" });
  }
};

exports.confirmScheduleByContributor = async (req, res) => {
  const { requestId, scheduleConfirmationType } = req.body;

  const exchangeCollection = client.db().collection("exchange");

  try {
    const requestIdObject = new ObjectId(requestId);

    // Update the request to confirm the schedule by the contributor
    const result = await exchangeCollection.updateOne(
      { _id: requestIdObject }, // Query condition to specify which request to update
      {
        $set: {
          scheduleConfirmedByContributor: true,
          scheduleConfirmationType: scheduleConfirmationType,
          exchangeVerifiedByContributor: false,
          exchangeVerifiedByBenificiary: false,
        },
      } // Set confirmedScheduleByContributor to true
    );

    if (result.modifiedCount === 0) {
      throw new Error("Failed to confirm schedule by contributor");
    }

    res.status(200).json({
      success: true,
      message: "Schedule confirmed by contributor successfully",
    });
  } catch (error) {
    console.error("Error confirming schedule by contributor:", error);
    res.status(500).json({
      success: false,
      message: "Failed to confirm schedule by contributor",
    });
  }
};

exports.verifyExchangeByBenificiary = async (req, res) => {
  const { requestId } = req.body;

  const exchangeCollection = client.db().collection("exchange");

  try {
    const requestIdObject = new ObjectId(requestId);

    // Update the request to verify the exchange by the beneficiary
    const result = await exchangeCollection.updateOne(
      { _id: requestIdObject }, // Query condition to specify which request to update
      { $set: { exchangeVerifiedByBenificiary: true } } // Set exchangeVerifiedByBenificiary to true
    );

    if (result.modifiedCount === 0) {
      throw new Error("Failed to verify exchange by beneficiary");
    }

    res.status(200).json({
      success: true,
      message: "Exchange verified by beneficiary successfully",
    });
  } catch (error) {
    console.error("Error verifying exchange by beneficiary:", error);
    res.status(500).json({
      success: false,
      message: "Failed to verify exchange by beneficiary",
    });
  }
};

exports.verifyExchangeByContributor = async (req, res) => {
  const { requestId } = req.body;

  const exchangeCollection = client.db().collection("exchange");

  try {
    const requestIdObject = new ObjectId(requestId);

    // Update the request to verify the exchange by the beneficiary
    const result = await exchangeCollection.updateOne(
      { _id: requestIdObject }, // Query condition to specify which request to update
      { $set: { exchangeVerifiedByContributor: true } } // Set exchangeVerifiedByBenificiary to true
    );

    if (result.modifiedCount === 0) {
      throw new Error("Failed to verify exchange by contributor");
    }

    res.status(200).json({
      success: true,
      message: "Exchange verified by contributor successfully",
    });
  } catch (error) {
    console.error("Error verifying exchange by contributor:", error);
    res.status(500).json({
      success: false,
      message: "Failed to verify exchange by contributor",
    });
  }
};
