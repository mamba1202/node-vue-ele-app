const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const monfoose = require("mongoose")
const User = mongoose.module("users")
const keys = require("../config/keys")

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey

module.exports = passport=>{
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne(jwt_payload.id) 
    .then(user=>{
        if(user){
            return done(null,user)
         }
         return done(null,false)
    })
    .catch(err=>console.log(err))
}));
}


module.exports = passport => {

}