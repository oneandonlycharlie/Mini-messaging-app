const {Router} = require("express")
const userRouter = Router()
const messages = require("../db.js")

userRouter.get("/:user", (req,res)=>{
    const message = messages.find((item)=> item.user==req.params.user)
    res.render("user", { message : message })
})

module.exports = userRouter