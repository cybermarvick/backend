const express = require("express")
const router = express.Router()
const {uservalidationschema} = require("../Middlewares/uservalidation")
const {validate} = require("../Middlewares/Validator")
const {Signup, Loginuser, verifydashboard, updateprofile} = require("../Controllers/userController")


router.post("/signup",validate(uservalidationschema), Signup)
router.post("/login", Loginuser)
router.get("/verifytoken", verifydashboard)
router.post("/update", updateprofile)


module.exports = router