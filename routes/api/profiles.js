//@login & register
const express = require('express')
const router = express.Router()
const passport = require("passport")
const Profile = require("../../models/Profile")

//@route GET api/profiles/add
//@desc 返回的请求的json数据
//@access public
router.get("/test", (req, res) => {
     res.json({ msg: "profiles works" })
 })

 //@route GET api/profiles/test
 //@desc 创建信息接口
 //@access Private
 router.get("/add",passport.authenticate('jwt',{session: false}),(req,res)=> {
           const profileFields = {}

           if(req.body.type) profileFields.type = req.body.type
           if(req.body.describe) profileFields.type = req.body.describe
           if(req.body.income) profileFields.type = req.body.income
           if(req.body.expend) profileFields.type = req.body.expend
           if(req.body.cash) profileFields.type = req.body.cash
           if(req.body.remark) profileFields.type = req.body.remark

           new Profile(profileFields).save().then(Profile=>{
               return json(profile)
           })
 })
module.exports = router