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
router.get("/add", passport.authenticate('jwt', { session: false }), (req, res) => {
    const profileFields = {}

    if (req.body.type) profileFields.type = req.body.type
    if (req.body.describe) profileFields.type = req.body.describe
    if (req.body.income) profileFields.type = req.body.income
    if (req.body.expend) profileFields.type = req.body.expend
    if (req.body.cash) profileFields.type = req.body.cash
    if (req.body.remark) profileFields.type = req.body.remark

    new Profile(profileFields).save().then(Profile => {
        return json(profile)
    })
})

//@route GET api/profiles
//@desc获取所有信息
//@access Private
router.get("/", passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.find()   //查询所有
        .then(profile => {
            if (!profile) {
                return res.status(404).json('没有任何内容')
            }
            res.json(profile)
        })
        .catch(ree => res.status(404).json('err'))

})

//@route GET api/profiles/:id
//@desc获取单个信息
//@access Private
router.get(":id", passport.authenticate('jwt', { session: false }), (req, res) => {
    Profile.findOne({ _id: req.param._id })   //查询所有
        .then(profile => {
            if (!profile) {
                return res.status(404).json('没有任何内容')
            }
            res.json(profile)
        })
        .catch(ree => res.status(404).json('err'))

})
module.exports = router