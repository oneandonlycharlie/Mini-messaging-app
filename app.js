const express = require("express")
const app= express()
const path = require("node:path")
const assetsPath = path.join(__dirname, "public")

const indexRouter = require("./routes/indexRouter")
const newMessageRouter = require("./routes/newMessageRouter")
const userRouter = require("./routes/userRouter")

const PORT = 3000


app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(express.static(assetsPath))

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/user", userRouter)


app.listen(PORT, ()=>{
    console.log(`Start litening at ${PORT}`)
})