const {Router} = require("express")
const indexRouter = Router()
const messages = require("../db.js")


indexRouter.get("/", (req,res)=>{
    res.render("index", { title: "Mini messaing board", messages: messages });
})

indexRouter.post("/new", (req,res)=>{
    messages.push({ text: req.body.messageText, user: req.body.user, added: new Date()});
    res.redirect("/")
})


module.exports = indexRouter