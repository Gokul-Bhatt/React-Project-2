const express = require("express");
const app = express();


app.get("/", (req, res)=>{
    res.status(200).send("running")
});
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})