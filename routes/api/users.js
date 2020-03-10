//registering, adding
const express = require('express')
const router = express.Router()

//@route    GET api/users
//@desc     Test route
//@access   Public (if you need a token to access a specific route)
router.get('/', (req, res) => res.send('User route'))



module.exports = router