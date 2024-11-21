const {Router} = require("express")
const userRouter = Router()
const messages = require("../db.js")

userRouter.get("/:user", (req,res)=>{
    const userID = req.params.user
    const message = messages.find((item)=> item.user==userID)
    console.log("res sent")
    console.log(message)
    res.render("user", { message : message })
})

module.exports = userRouter