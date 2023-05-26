const jwt = require('jsonwebtoken')

const 
auth = (req, res, next) =>{
    try {
        const token = req.header("Authorization")
        console.log(token)
        if(!token) return res.status(400).json({msg: "Invalid Authentication"})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
            if(err) 
            console.log(user)
            req.user = user
            return res.status(400).json({msg: "Invalid Authentication access"})
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth