const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("process")
const app = express()

//引入users.js
const users= require('./routes/api/users')

//DB config
const db = require("./config/keys").mongoURL

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Connect to mongodb
mongoose.connect(db,{ useNewUrlParser: true }
)
.then(()=> console.log("mongoDB Connect"))
.catch(err=> console.log(err))

// app.get("/",(req,res)=>{
//     res.send("Hello World!")
// })

//passport初始化
app.use(passport.initialize());
require("./config/passport")(passport)

//使用routes
app.use('/api/users',users)

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})