//registering, adding
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

//@route    POST api/users
//@desc     Register route
//@access   Public (if you need a token to access a specific route)
//send email, password, name to register
router.post('/', [
        check('name', 'Name is required').not().isEmpty(), //to be required
        check('email', "Please include a valid email").isEmail(),
        check('password', "Please enter a password with 6 or more characters").isLength({ min: 6 })

    ],
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        console.log(req.body) //object data sent to this route
            //we need to initialise middleware for body parser 
        res.send('User route')
    })



module.exports = router