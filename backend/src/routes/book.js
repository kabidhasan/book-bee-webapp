const { Router } = require("express");
const {addBook, getAllBooks, requestBook, getAllRequestsByContributorId, respondByRequestId, getAllRequestsByBenificiaryId, scheduleMeetUpByBenificiary, confirmScheduleByContributor, verifyExchangeByContributor, verifyExchangeByBenificiary, getBookById} = require("../controllers/book")
const router = Router();

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/addBook", upload.single('image'), addBook);
router.get("/getAllBooks", getAllBooks);
router.get("/getBookById/:id", getBookById);
router.post("/requestBook", requestBook);
router.get("/getAllRequestByContributorId", getAllRequestsByContributorId);
router.get("/getAllRequestByBenificiaryId", getAllRequestsByBenificiaryId );
router.post("/respondByRequestId", respondByRequestId);
router.post("/scheduleMeetUpByBenificiary", scheduleMeetUpByBenificiary);
router.post("/confirmScheduleByContributor", confirmScheduleByContributor);
router.post("/verifyExchangeByBenificiary", verifyExchangeByBenificiary );
router.post("/verifyExchangeByContributor", verifyExchangeByContributor);



module.exports = router;
