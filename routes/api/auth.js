//registering, adding
const express = require("express");
const router = express.Router();

//@route    GET api/auth
//@desc     Test route
//@access   Public (if you need a token to access a specific route)
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;