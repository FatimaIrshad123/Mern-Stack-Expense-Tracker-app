const { Admin } = require("../db");
var jwt = require('jsonwebtoken');
const jwtSecret = 'Fatima'
// Middleware for handling auth

function adminMiddleware(req, res, next) {
    
    let token = req.headers.authorization;
    if (token){
        jwt.verify(token,jwtSecret,(err,user)=>{
            if (err){
                return res.send(err)
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
        }
    }

module.exports = {
    adminMiddleware
}