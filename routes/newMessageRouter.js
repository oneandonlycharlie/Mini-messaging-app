const {Router} = require("express")
const newMessageRouter = Router()

newMessageRouter.get("/", (req,res)=>{
    res.render("form", {title: "this is the submit form"})
})


module.exports = newMessageRouter