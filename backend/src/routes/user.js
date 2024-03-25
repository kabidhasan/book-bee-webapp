const { Router } = require("express");
const router = Router();
const {updateProfile, getUserByUserId } = require("../controllers/user");
const { userAuth } = require("../middlewares/auth-middleware");


router.put("/updateProfile", updateProfile)
router.get("/getUserByUserId/:userId", getUserByUserId)
module.exports = router;
