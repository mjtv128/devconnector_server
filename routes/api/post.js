//form//registering, adding
const express = require('express')
const router = express.Router()

//@route    GET api/posts
//@desc     Test route
//@access   Public (if you need a token to access a specific route)
router.get('/', (req, res) => res.send('Post route'))



module.exports = router