const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '3d'})
}

const User = require('./models/UserModel')

router.post('/signup', async (req, res) => {
    const {username, password} = req.body
    
    try{
        const user = await User.signup(username,password)

        const token = createToken(user._id)
        res.status(200).json({username,token});
    } catch (error){
        res.status(400).json({error: error.message})
    }
})

router.post('/login', async( req,res) => {
    const {username, password} = req.body
    try{
        const user = await User.login(username,password)
        const token = createToken(user._id)
        res.status(200).json({username,token});
    } catch (error){
        console.log(error.message)
        res.status(400).json({error: error.message})
    }
})

module.exports = router;