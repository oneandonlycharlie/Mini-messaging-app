const express = require("express")
const indexRouter = require("./routes/indexRouter")
const app= express()
const path = require("node:path")

const PORT = 3000


app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs")

app.get("/", indexRouter);

app.get("/new",(req,res)=>{
    res.send("Express set up successfully at '/new'")
});




app.listen(PORT, ()=>{
    console.log(`Start litening at ${PORT}`)
})