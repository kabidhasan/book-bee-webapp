const { Router } = require("express");
const router = Router();
const {updateProfile } = require("../controllers/user");
const { userAuth } = require("../middlewares/auth-middleware");


router.put("/updateProfile", updateProfile)
module.exports = router;
